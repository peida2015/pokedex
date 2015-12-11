var React = require('react'),
    PokemonStore = require('../../stores/pokemon'),
    ApiUtil = require('../../util/ApiUtil'),
    PokemonIndexItem = require('./PokemonIndexItem'),
    PokemonActions = require('../../actions/pokemonActions');

var PokemonsIndex = React.createClass({
  getInitialState: function() {
    return { pokemons: PokemonStore.all() };
  },

  _onChange: function(){
    this.setState({pokemons: PokemonStore.all()});
  },

  componentDidMount: function() {
    PokemonStore.addListener(this._onChange);
    ApiUtil.fetchAllPokemons();
  },

  componentWillUnmount: function() {
    PokemonStore.removeListener(this._onChange);
  },

  render: function(){
    var pokemons = this.state.pokemons.map(function(pokemon, idx){
      return (
        <PokemonIndexItem key={idx}
                      pokemonId={idx}
                      name={ pokemon.name }
                      type={ pokemon.poke_type } />);
    });
    return(
      <ul>{pokemons}</ul>
    );
  }
});

module.exports = PokemonsIndex;
