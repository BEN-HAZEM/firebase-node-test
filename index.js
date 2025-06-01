const express = require('express');
const app = express();

// Firebase Hosting يعمل على هذا البورت
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello from Firebase Hosting!');
});

app.listen(PORT, () => {
  console.log(Server is running on port ${PORT});
});