
const BASE = process.env.REACT_APP_API_URL || 'https://sentiment-app-back.onrender.com';


export async function analyzeText(text) {
  const res = await fetch(`${BASE}/api/sentiment`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ text })
  });
  if (!res.ok) {
    const body = await res.text().catch(()=>null);
    throw new Error(body || `HTTP ${res.status}`);
  }
  return res.json();
}
