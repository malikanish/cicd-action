const express = require('express');
const app = express();

const PORT = 3000;
const HOST = '0.0.0.0'; 

app.get('/', (req, res) => {
  res.send('✅ Node.js App is running inside Docker on EC2!');
});

app.listen(PORT, HOST, () => {
  console.log(`✅ App is running at http://${HOST}:${PORT}`);
});
