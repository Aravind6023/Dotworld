const express = require('express');
const axios = require('axios');
const http = require('http');
const cors = require('cors');

const app = express();

app.use(
    cors(
        {
            origin: 'http://localhost:3001',
        }
));

app.get('/photos', async (req, res) => {
  try {
    const response = await axios.get('http://jsonplaceholder.typicode.com/photos');
    const photos = response.data;
    res.json(photos);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
