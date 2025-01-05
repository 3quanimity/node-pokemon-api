const { Pokemon } = require('../db/sequelize');

module.exports = app => {
  app.post('/api/pokemons', (req, res) => {
    Pokemon.create(req.body)
      .then(pokemon => {
        const message = `✅ ${pokemon.name} has been created`;
        res.json({ message, data: pokemon });
      })
      .catch(error => {
        const message = '❌ Impossible to create the pokemon';
        res.json({ message, data: error });
      });
  });
};
