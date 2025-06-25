let devices = global.devices || [];
global.devices = devices;

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(devices);
  }
  res.status(405).end();
}