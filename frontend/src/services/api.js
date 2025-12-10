export async function analyzeText(text) {
const res = await fetch('/api/sentiment', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ text: inputText })
});
if (!res.ok) {
const body = await res.json().catch(() => ({}));
throw new Error((body && body.error) || `Server error ${res.status}`);
}
return res.json();
}
