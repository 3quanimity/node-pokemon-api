let pokemons = require('./mock-pokemons');

const success = (message, data) => {
  return {
    status: 'success',
    message,
    data,
  };
};

const error = (message, data) => {
  return {
    status: 'error',
    message,
    data,
  };
};

const generatePokemonId = () =>
  Math.max(...pokemons.map(pokemon => pokemon.id)) + 1;

module.exports = {
  success,
  error,
  generatePokemonId,
};
