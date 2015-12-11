var PokemonActions = require('../actions/pokemonActions');

var ApiUtil = {
  fetchAllPokemons: function () {
    $.ajax ({
      type: "GET",
      url: "api/pokemon",
      success: function(data){
        PokemonActions.receiveAllPokemons(data);
      }
    });
  },
  fetch: function(id) {
    $.ajax ({
      type: "GET",
      url: "api/pokemon/"+id,
      success: function(data) {
        PokemonActions.receiveSinglePokemon(data);
      }
    });
  }
};

module.exports = ApiUtil;
