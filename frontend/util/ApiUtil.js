var ApiActions = require('ApiActions');

var ApiUtil = {
  fetchAllPokemons: function () {
    $.ajax ({
      type: "GET",
      url: "api/pokemon",
      success: ApiActions.receiveAllPokemons
    });
  }
};

module.exports = ApiUtil;
