require('dotenv').config();
const express = require('express');
const cors = require('cors');
const contactRoute = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 3001;

const allowedOrigins = process.env.CLIENT_ORIGIN
  ? process.env.CLIENT_ORIGIN.split(',')
  : ['http://localhost:5173'];
app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

app.use('/api/contact', contactRoute);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Khushi portfolio API running' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
