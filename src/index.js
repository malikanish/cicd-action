const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('🚀 Hello from Anish\'s Dockerized Node.js app on EC2!');
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
