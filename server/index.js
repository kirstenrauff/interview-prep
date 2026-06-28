const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4200;

app.use(cors());
app.use(express.json());

// Sample API endpoint
app.get('/api/message', async (req, res) => {
  console.log(`Processing request for /api/message`);
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  const username = data.results[0].login.username;
  return res.status(200).json({ username });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});