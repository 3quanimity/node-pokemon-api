const { Pokemon } = require('../db/sequelize');

module.exports = app => {
  app.get('/api/pokemons', (req, res) => {
    Pokemon.findAll()
      .then(pokemons => {
        const message = '✅ Liste de tous les pokemons';
        res.json({ message, data: pokemons });
      })
      .catch(error => {
        const message = '❌ Impossible de récupérer la liste des pokemons';
        res.json({ message, data: error });
      });
  });
};
