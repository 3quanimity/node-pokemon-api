const express = require('express');
let pokemons = require('./mock-pokemons');
const { success, error } = require('./helper');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Express 👋🏼');
});

app.get('/api/pokemons/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const pokemon = pokemons.find(pokemon => pokemon.id === id);
  const message = `Pokemon with id ${id} found`;
  res.json(success(message, pokemon));
});

app.get('/api/pokemons', (req, res) => {
  const message = 'All pokemons found';
  res.json(success(message, pokemons));
});

// 🟢 Start the Server
app.listen(port, () => {
  console.log(`App started and listening on 👉🏼 http://localhost:${port}`);
});
