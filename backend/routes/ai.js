const express = require("express");

const router = express.Router();

router.post("/ask-ai", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        message: "Please enter a question.",
      });
    }

    const question = prompt.toLowerCase();

    let answer = "";

    // Greetings
    if (
      question.includes("hi") ||
      question.includes("hello") ||
      question.includes("hey")
    ) {
      answer =
        "Hello! 👋 I am RouteWise AI. I can help you with routes, buses, fares and travel guidance in Dehradun.";
    }

    // Route
    else if (
      question.includes("route") ||
      question.includes("reach") ||
      question.includes("go")
    ) {
      answer =
        "Based on available RouteWise data, I recommend checking the Dashboard routes. Bus routes are usually the fastest option, while Vikram is suitable for shorter distances.";
    }

    // Fare
    else if (
      question.includes("fare") ||
      question.includes("price") ||
      question.includes("cost")
    ) {
      answer =
        "Bus fares are generally economical. You can check the exact fare for each route from the RouteWise Dashboard.";
    }

    // Bus
    else if (question.includes("bus")) {
      answer =
        "RouteWise provides available bus routes with fare information to help you choose the best public transport option.";
    }

    // Vikram
    else if (
      question.includes("vikram") ||
      question.includes("auto")
    ) {
      answer =
        "Vikram vehicles are useful for short-distance travel and local connectivity within the city.";
    }

    // Time
    else if (
      question.includes("time") ||
      question.includes("traffic")
    ) {
      answer =
        "To avoid traffic, try travelling before 8 AM or after 7 PM whenever possible.";
    }

    // Tips
    else if (
      question.includes("tip") ||
      question.includes("travel")
    ) {
      answer =
        "Travel Tip: Keep change for fares, verify your destination before boarding, and avoid peak traffic hours.";
    }

    // Thank you
    else if (question.includes("thank")) {
      answer =
        "You're welcome! 😊 Have a safe journey with RouteWise.";
    }

    // Default
    else {
      answer =
        "I'm RouteWise AI. I can answer questions related to transport routes, buses, Vikram, fares and travel guidance. Please ask something related to travelling.";
    }

    // Simulate AI thinking
    await new Promise(resolve => setTimeout(resolve, 1200));

    res.json({
      answer,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Something went wrong. Please try again later.",
    });
  }
});

module.exports = router;