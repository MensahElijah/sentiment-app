import React, { useState } from "react";

function Spinner({ size = 18 }) {
  const s = {
    width: size,
    height: size,
    border: `${Math.max(2, Math.round(size / 8))}px solid rgba(255,255,255,0.15)`,
    borderTop: `${Math.max(2, Math.round(size / 8))}px solid #ffffff`,
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
    display: "inline-block",
    marginRight: 8
  };
  return <span style={s} aria-hidden="true" />;
}

export default function Home() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async () => {
    setErrorMsg("");
    setResult(null);
    if (!text.trim()) {
      setErrorMsg("Please enter some text.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('https://sentiment-app-back.onrender.com/api/sentiment', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
      });

      const raw = await res.text();
      if (!raw) throw new Error(`Empty response (status ${res.status})`);
      const data = JSON.parse(raw);
      setResult(data);
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message || "Error contacting server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page">
      <div className="card">
        <h1>Sentiment Analysis</h1>
        <textarea
          rows={6}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a sentence to analyze..."
          disabled={loading}
        />
        <div style={{ marginTop: 10 }}>
          <button onClick={handleSubmit} disabled={loading} className="btn">
            {loading ? (
              <>
                <Spinner /> Analyzing...
              </>
            ) : (
              "Analyze"
            )}
          </button>
        </div>

        {errorMsg && <div className="error">{errorMsg}</div>}

        {result && (
          <div className="result">
            <div>
              <strong>Label:</strong>{" "}
              <span className={`label ${result.label}`}>{result.label}</span>
            </div>
            <div><strong>Score:</strong> {result.score}</div>
          </div>
        )}
      </div>
    </section>
  );
}

