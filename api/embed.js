export default async function handler(req, res) {
  const url =
    "http://mitwebsrv.magna.global/powerbi/EmbedReport" +
    "?groupid=e7bcd77e-ced1-4dc1-ab1c-5a723be2b0e7" +
    "&reportid=b19c5af9-443f-4898-adb6-e0b981b54fa2";

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch embed token" });
  }
}
