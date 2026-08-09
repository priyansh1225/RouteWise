const express = require("express");
const { GoogleGenAI } = require("@google/genai");
const Route = require("../models/route");

const router = express.Router();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

router.post("/ask-ai", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt || !prompt.trim()) {
      return res.status(400).json({
        message: "Please enter a question.",
      });
    }

    // Clean user question
    const question = prompt
      .toLowerCase()
      .replace(/[?.,!]/g, " ");

    // Words that are not useful for route searching
    const stopWords = [
      "what",
      "where",
      "when",
      "which",
      "how",
      "can",
      "could",
      "would",
      "should",
      "is",
      "are",
      "the",
      "from",
      "to",
      "for",
      "me",
      "i",
      "want",
      "need",
      "please",
      "tell",
      "show",
      "give",
      "get",
      "go",
      "travel",
      "traveling",
      "traveling",
      "route",
      "routes",
      "fare",
      "price",
      "cost",
      "bus",
      "buses",
      "vehicle",
      "vehicles",
      "available",
      "there",
      "any",
      "with",
      "on",
      "in",
      "of",
      "and",
      "or",
      "a",
      "an",
    ];

    const keywords = question
      .split(/\s+/)
      .filter(
        (word) =>
          word.length >= 3 && !stopWords.includes(word)
      );

    let routes = [];

    // Search using useful location/vehicle keywords
    if (keywords.length > 0) {
      routes = await Route.find({
        $or: [
          ...keywords.map((word) => ({
            from: { $regex: word, $options: "i" },
          })),

          ...keywords.map((word) => ({
            to: { $regex: word, $options: "i" },
          })),

          ...keywords.map((word) => ({
            vehicle: { $regex: word, $options: "i" },
          })),
        ],
      }).limit(20);
    }

    // Remove duplicate routes
    const uniqueRoutes = [];
    const routeIds = new Set();

    for (const route of routes) {
      if (!routeIds.has(route._id.toString())) {
        routeIds.add(route._id.toString());
        uniqueRoutes.push(route);
      }
    }

    // Prioritize routes where both FROM and TO appear in the question
    const rankedRoutes = uniqueRoutes.sort((a, b) => {
      const aFrom = question.includes(a.from.toLowerCase());
      const aTo = question.includes(a.to.toLowerCase());

      const bFrom = question.includes(b.from.toLowerCase());
      const bTo = question.includes(b.to.toLowerCase());

      const aScore = (aFrom ? 2 : 0) + (aTo ? 2 : 0);
      const bScore = (bFrom ? 2 : 0) + (bTo ? 2 : 0);

      return bScore - aScore;
    });

    // Send only the most relevant routes to Gemini
    const relevantRoutes = rankedRoutes.slice(0, 10);

    const routeContext =
      relevantRoutes.length > 0
        ? relevantRoutes
            .map(
              (route) =>
                `From: ${route.from}, To: ${route.to}, Vehicle: ${route.vehicle}, Fare: ₹${route.fare}`
            )
            .join("\n")
        : "No matching routes were found in the RouteWise database.";

    const systemInstruction = `
You are RouteWise AI, a helpful public transport assistant for Dehradun, India.

Your job is to help users with:

- Public transport
- Bus travel
- Vikram travel
- Auto/local transport
- Route planning
- Fare information
- General travel guidance

Important rules:

1. Use the RouteWise database information provided to answer route and fare questions.

2. Never invent an exact RouteWise route or fare.

3. If the database information does not contain the requested route or fare, clearly tell the user that the exact information is currently not available in RouteWise.

4. Do not claim that you have live traffic information.

5. Do not claim that you have live vehicle tracking.

6. Do not present guesses as confirmed information.

7. Keep answers simple and useful.

8. If the user asks something unrelated to transportation, politely explain that you are RouteWise AI and are mainly designed for public transport and travel questions.

9. When a matching route is found, mention the available vehicle and fare.

10. If multiple matching routes are provided, explain the available options clearly.

11. Only use route and fare information contained in the RouteWise Database Information provided below.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",

      contents: `
User Question:
${prompt}

RouteWise Database Information:
${routeContext}
`,

      config: {
        systemInstruction,
      },
    });

    const answer = response.text;

    res.json({
      answer,
    });
  } catch (error) {
    console.error("Gemini API Error:", error);

    res.status(500).json({
      message:
        "AI service is temporarily unavailable. Please try again later.",
    });
  }
});

module.exports = router;