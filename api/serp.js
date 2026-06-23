export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  try {
    const { q, api_key, gl, hl } = req.query;
    const params = new URLSearchParams({
      engine: 'google_shopping',
      q: q,
      api_key: api_key,
      gl: gl || 'au',
      hl: hl || 'en'
    });
    const url = 'https://www.searchapi.io/api/v1/search?' + params.toString();
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
