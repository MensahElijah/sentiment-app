// backend/routes/sentiment.js
const express = require('express');
const Sentiment = require('sentiment');

const router = express.Router();
const sentiment = new Sentiment();

router.post('/', (req, res) => {
  try {
    const { text } = req.body || {};
    console.log('Received text:', text);

    if (!text || !text.trim()) {
      console.log('Empty text received');
      return res.status(400).json({ error: 'Text is required' });
    }

    const result = sentiment.analyze(text);
    const label = result.score > 0 ? 'positive' : result.score < 0 ? 'negative' : 'neutral';
    const out = { score: result.score, label };

    console.log('Sending response:', out);
    return res.json(out);

  } catch (err) {
    console.error('Route error:', err);
    // Send explicit fallback JSON so frontend doesn't get an empty body
    return res.status(500).json({ error: 'Server error', details: err.message || String(err) });
  }
});

module.exports = router;
