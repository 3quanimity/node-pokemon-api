const express = require('express');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const path = require('path');
const bodyParser = require('body-parser');
const { success, error, generatePokemonId } = require('./helper');
let pokemons = require('./mock-pokemons');

const app = express();
const port = 3000;

// Chaining middlewares : serve-favicon + morgan
app
  .use(favicon(path.join(__dirname, 'public', 'favicon.ico'))) // favicon
  .use(morgan('dev')) // logging
  .use(bodyParser.json()); // parsing JSON

// Routes
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

app.post('/api/pokemons', (req, res) => {
  const id = generatePokemonId();
  const pokemonCreated = { ...req.body, id, created: new Date() };
  console.log('🚀 ~ req.body:', req.body);
  pokemons.push(pokemonCreated);
  const message = `Pokemon ${pokemonCreated.name} created`;
  res.json(success(message, pokemonCreated));
});

// 🟢 Start the Server
app.listen(port, () => {
  console.log(`App started and listening on 👉🏼 http://localhost:${port}`);
});
