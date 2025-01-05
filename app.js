const express = require('express');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const path = require('path');
const bodyParser = require('body-parser');
const sequelize = require('./src/db/sequelize');

const app = express();
const port = 3000;

// Chaining middlewares : serve-favicon + morgan
app
  .use(favicon(path.join(__dirname, 'public', 'favicon.ico'))) // favicon
  .use(morgan('dev')) // logging
  .use(bodyParser.json()); // parsing JSON

sequelize.initDb();

// Endpoints
require('./src/routes/findAllPokemons')(app);
require('./src/routes/findPokemonByPk')(app);

app.listen(port, () => {
  console.log(
    `🟢 APP: App started and listening on 👉🏼 http://localhost:${port}`
  );
});
