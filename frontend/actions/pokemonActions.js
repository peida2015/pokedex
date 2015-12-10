var Dispatcher = require('./dispatcher/dispatcher');
var PokemonConstants = require('./constants/pokemonConstants.js');

var pokemonActions = {
  receiveAllPokemons: function (pokemons) {
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  }
};

module.exports = pokemonActions;
