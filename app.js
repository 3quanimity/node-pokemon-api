const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Express 👋🏼');
});

app.listen(port, () => {
  console.log(`App started andlistening on 👉🏼 http://localhost:${port}`);
});
