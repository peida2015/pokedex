var Store = require('flux/util').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var PokemonConstants = require('../constants/pokemonConstants');

var PokemonStore = new Store(Dispatcher);

var _pokemons = {};

PokemonStore.prototype = {
  all: function () {
    var pokemons = [];

    Object.keys(_pokemons).forEach(function (pokemon_idx) {
      pokemons.push(_pokemons[pokemon_idx]);
    });

    return pokemons;
  },

  resetPokemons: function () {
    // _pokemons =
  },

  __onDispatch: function (payload) {
    switch (payload.actionType) {
      case PokemonConstants.POKEMONS_RECEIVED:
        resetPokemons();
        break;
      // default:
    }

  }
};
