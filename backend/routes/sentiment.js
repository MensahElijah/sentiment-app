// backend/routes/sentiment.js
const express = require('express');
const Sentiment = require('sentiment');

const router = express.Router();
const sentiment = new Sentiment();

router.post('/', (req, res) => {
  try {
    const { text } = req.body || {};

    if (!text || !text.trim()) {
      return res.status(400).json({ error: 'Text is required' });
    }

    const result = sentiment.analyze(text);
    const label = result.score > 0 ? 'positive' :
                 result.score < 0 ? 'negative' : 'neutral';

    return res.json({ score: result.score, label });

  } catch (err) {
    return res.status(500).json({
      error: 'Server error',
      details: err.message || String(err),
    });
  }
});

module.exports = router;






// backend/routes/sentiment.js
// const express = require('express');
// const Sentiment = require('sentiment');

// const router = express.Router();
// const sentiment = new Sentiment();

// router.post('/', (req, res) => {
//   try {
//     const { text } = req.body || {};
    // console.log('Received text:', text);

    // if (!text || !text.trim()) {
      // console.log('Empty text received');
//       return res.status(400).json({ error: 'Text is required' });
//     }

//     const result = sentiment.analyze(text);
//     const label =
//       result.score > 0 ? 'positive' :
//       result.score < 0 ? 'negative' : 'neutral';

//     const out = {
//       score: result.score,
//       label,
//       words: result.words,
//     };

//     // console.log('Sending response:', out);
//     return res.json(out);

//   } catch (err) {
//     // console.error('Route error:', err);
//     return res.status(500).json({
//       error: 'Server error',
//       details: err.message || String(err)
//     });
//   }
// });

// module.exports = router;
