export default async function handler(req, res) {
  try {
    const formData = req.body;
    const response = await fetch("https://api.deepai.org/api/background-remover", {
      method: "POST",
      headers: { "Api-Key": process.env.DEEPAI_API_KEY },
      body: formData,
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to remove background" });
  }
}
