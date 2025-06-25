let devices = global.devices || [];
global.devices = devices;

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { nome, ip, ssid, hora } = req.body;
    if (!nome || !ip) return res.status(400).json({ error: 'Dados incompletos' });

    const index = devices.findIndex((d) => d.nome === nome);
    const data = { nome, ip, ssid, hora, status: 'online', lastSeen: new Date() };

    if (index >= 0) devices[index] = data;
    else devices.push(data);

    return res.status(200).json({ success: true });
  }
  res.status(405).end();
}
