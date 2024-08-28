require('dotenv').config()
const allowedDomain = process.env.ALLOWED_DOMAIN; // Ganti dengan domain yang diizinkan

function blockUnallowedDomains(req, res, next) {
  if (req.method === 'POST') {
    const origin = req.get('Origin') || req.get('Referer');

    if (origin && origin.startsWith(allowedDomain)) {
      return next();
    } else {
      return res.status(403).json({ message: 'Forbidden: You are not allowed to access this resource' });
    }
  } else {
    next();
  }
}

app.use(blockUnallowedDomains);
