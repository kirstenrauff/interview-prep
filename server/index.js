const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4200;

app.use(cors());
app.use(express.json());

// Sample API endpoint
app.get('/api/user', async (req, res) => {
  console.log(`Processing request for /api/user`);
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  const username = data.results[0].login.username;
  const picture = data.results[0].picture.large;
  return res.status(200).json({ user: {
    username, picture 
  }});
});

app.get('/api/dog', async (req, res) => {
  console.log(`Processing request for /api/dog`);
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await response.json();
  const image = data.message;
  return res.status(200).json({ dog: { image } });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});