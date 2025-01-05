const { Pokemon } = require('../db/sequelize');

module.exports = app => {
  app.delete('/api/pokemons/:id', (req, res) => {
    Pokemon.findByPk(req.params.id)
      .then(pokemon => {
        pokemon
          .destroy()
          .then(() => {
            const message = `✅ ${pokemon.name} has been deleted`;
            res.json({ message, data: pokemon });
          })
          .catch(error => {
            const message = '❌ Impossible to delete the pokemon';
            res.json({ message, data: error });
          });
      })
      .catch(error => {
        const message = '❌ Impossible to find the pokemon';
        res.json({ message, data: error });
      });
  });
};
