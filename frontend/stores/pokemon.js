var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var PokemonConstants = require('../constants/pokemonConstants');

var PokemonStore = new Store(Dispatcher);

var _pokemons = {};

PokemonStore.all = function () {
  var pokemons = [];

  Object.keys(_pokemons).forEach(function (pokemon_idx) {
    pokemons.push(_pokemons[pokemon_idx]);
  });

  return pokemons;
};

PokemonStore.find = function(id) {
  return _pokemons[id];
};

PokemonStore.resetPokemons = function (pokemons) {
  _pokemons = {};

  pokemons.forEach(function(pokemon, idx){
    _pokemons[idx] = pokemon;
  });
  PokemonStore.__emitChange();
};

PokemonStore.updatePokemon = function (pokemon) {
  _pokemons[pokemon.id] = pokemon;
  PokemonStore.__emitChange();
};

PokemonStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case PokemonConstants.POKEMONS_RECEIVED:
      this.resetPokemons(payload.pokemons);
      break;
    case PokemonConstants.POKEMON_RECEIVED:
      this.updatePokemon(payload.pokemon);
      break;
    // default:
  }
};

module.exports = PokemonStore;
