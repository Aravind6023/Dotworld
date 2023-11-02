const express = require('express');
const axios = require('axios');

const app = express();

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

app.listen(3456, () => {
  console.log(`Server is running on port 3456`);
});
