import React, { useState } from 'react';
import { analyzeText } from '../services/api';


export default function TextForm() {
const [text, setText] = useState('');
const [loading, setLoading] = useState(false);
const [result, setResult] = useState(null);
const [error, setError] = useState('');


async function handleSubmit(e) {
e.preventDefault();
setError('');
setResult(null);
if (!text.trim()) return setError('Please enter some text');
setLoading(true);
try {
const res = await analyzeText(text);
setResult(res);
} catch (err) {
setError(err.message || 'Request failed');
} finally {
setLoading(false);
}
}


return (
<form onSubmit={handleSubmit}>
<textarea
rows={6}
style={{ width: '100%', padding: 10 }}
value={text}
onChange={(e) => setText(e.target.value)}
placeholder="Type a sentence to analyze..."
/>
<div style={{ marginTop: 8 }}>
<button type="submit" disabled={loading}>
{loading ? 'Analyzing...' : 'Analyze Sentiment'}
</button>
</div>


{error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}


{result && (
<div style={{ marginTop: 12, border: '1px solid #ddd', padding: 12 }}>
<div><strong>Label:</strong> {result.label}</div>
<div><strong>Score:</strong> {result.score}</div>
</div>
)}
</form>
);
}