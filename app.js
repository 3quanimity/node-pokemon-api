const express = require('express');
let pokemons = require('./mock-pokemons');

const app = express();
const port = 3000;

// returns a string saying hello
app.get('/', (req, res) => {
  res.send('Hello Express 👋🏼');
});

// returns the pokemon that matches the requested id
app.get('/api/pokemons/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const pokemon = pokemons.find(pokemon => pokemon.id === id);
  res.json(pokemon);
});

// returns a string saying how many pokemons there are in the database
app.get('/api/pokemons', (req, res) => {
  res.send(`There are ${pokemons.length} pokemons in the database`);
});

// start the server and listen on the given port
app.listen(port, () => {
  console.log(`App started and listening on 👉🏼 http://localhost:${port}`);
});
