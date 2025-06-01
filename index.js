const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Firebase App Hosting works ✅');
});

app.listen(PORT, () => {
  console.log(Server is listening on port ${PORT});
});