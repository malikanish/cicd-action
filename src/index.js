const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('🚀 Hello from Dockerized Node.js App on EC2!');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`App running on http://0.0.0.0:${PORT}`);
});
