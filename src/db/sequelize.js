const { Sequelize, DataTypes } = require('sequelize');
const PokemonModel = require('../models/pokemon');
let pokemons = require('./mock-pokemons');

const sequelize = new Sequelize(
  'pokedex', // db's name
  'root', // username
  '', // password
  {
    host: 'localhost',
    dialect: 'mariadb', // db's driver
    dialectOptions: {
      timezone: 'Etc/GMT-2',
    },
    logging: false,
  }
);

const Pokemon = PokemonModel(sequelize, DataTypes);

const initDb = () => {
  return sequelize.sync({ force: true }).then(() => {
    pokemons.forEach(pokemon => {
      Pokemon.create({
        name: pokemon.name,
        hp: pokemon.hp,
        type: pokemon.type.join(),
        picture: pokemon.picture,
      }).then(pokemon => {
        console.log(
          `🟣 SEQUELIZE: ${pokemon.name} has been created`,
          pokemon.toJSON()
        );
      });
    });

    console.log('🟣 SEQUELIZE: Pokedex Database has been synchronized');
  });
};

module.exports = { initDb, Pokemon };
