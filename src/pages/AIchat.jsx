import { useState } from "react";

import Navbar from "../component/navbar";
import Footer from "../component/footer";
import api from "../services/api";

function AIChat({ toggleTheme }) {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const askAI = async () => {
    if (!prompt.trim()) {
      setError("Please enter a question.");
      setAnswer("");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setAnswer("");

      const res = await api.post("/api/ask-ai", {
        prompt,
      });

      setAnswer(res.data.answer);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to connect to RouteWise AI. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.ctrlKey) {
      askAI();
    }
  };

  return (
    <>
      <Navbar toggleTheme={toggleTheme} />

      <div className="ai-page">

        <div className="ai-header">
          <h1>
            🤖 RouteWise <span>AI Assistant</span>
          </h1>

          <p>
            Your smart travel companion for routes, buses, fares,
            Vikram services and travel guidance.
          </p>
        </div>

        <div className="ai-card">

          <label className="ai-label">
            💬 Ask your travel question
          </label>

          <textarea
            rows="6"
            className="search-input"
            placeholder="Example: Best route from ISBT to Clock Tower?"
            value={prompt}
            maxLength={500}
            onKeyDown={handleKeyDown}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <div className="char-counter">
            {prompt.length}/500
          </div>

          <button
            className="ai-btn"
            onClick={askAI}
            disabled={loading}
          >
            {loading
              ? "⏳ Thinking..."
              : "🚀 Ask RouteWise AI"}
          </button>

        </div>

        {loading && (
          <div className="ai-response loading-card">

            <div className="loader"></div>

            <h3>🤖 RouteWise AI</h3>

            <p>
              Thinking...
              <br />
              Please wait while I prepare your answer.
            </p>

          </div>
        )}

        {error && (
          <div className="error-card">

            <h3>❌ Something went wrong</h3>

            <p>{error}</p>

          </div>
        )}

        {answer && (
          <div className="ai-response">

            <h3>🤖 RouteWise AI</h3>

            <p>{answer}</p>

          </div>
        )}

        <div className="ai-features">

          <div className="feature-card">
            🚌
            <h4>Bus Routes</h4>
            <p>Find the best public transport routes.</p>
          </div>

          <div className="feature-card">
            🚖
            <h4>Vikram Info</h4>
            <p>Get Vikram availability and fare details.</p>
          </div>

          <div className="feature-card">
            💰
            <h4>Fare Guide</h4>
            <p>Estimate travel cost instantly.</p>
          </div>

          <div className="feature-card">
            🗺️
            <h4>Travel Tips</h4>
            <p>Smart suggestions for your journey.</p>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default AIChat;