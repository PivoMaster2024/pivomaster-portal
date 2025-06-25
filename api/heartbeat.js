let devices = global.devices || [];
global.devices = devices;

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { nome } = req.body;
    const device = devices.find((d) => d.nome === nome);
    if (device) {
      device.status = 'online';
      device.lastSeen = new Date();
    }
    return res.status(200).json({ ok: true });
  }
  res.status(405).end();
}
