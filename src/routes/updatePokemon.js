const { Pokemon } = require('../db/sequelize');

module.exports = app => {
  app.put('/api/pokemons/:id', (req, res) => {
    Pokemon.update(req.body, {
      where: { id: req.params.id },
    })
      .then(() => {
        Pokemon.findByPk(req.params.id)
          .then(pokemon => {
            const message = `✅ ${pokemon.name} has been updated`;
            res.json({ message, data: pokemon });
          })
          .catch(error => {
            const message = '❌ Impossible to find the pokemon';
            res.json({ message, data: error });
          });
      })
      .catch(error => {
        const message = '❌ Impossible to update the pokemon';
        res.json({ message, data: error });
      });
  });
};
