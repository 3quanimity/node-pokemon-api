const { Pokemon } = require('../db/sequelize');

module.exports = app => {
  app.get('/api/pokemons/:id', (req, res) => {
    Pokemon.findByPk(req.params.id)
      .then(pokemon => {
        const message = `✅ ${pokemon.name} has been found`;
        res.json({ message, data: pokemon });
      })
      .catch(error => {
        const message = '❌ Impossible to find the pokemon';
        res.json({ message, data: error });
      });
  });
};
