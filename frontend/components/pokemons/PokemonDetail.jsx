var React = require('react'),
    ApiUtil = require('../../util/ApiUtil'),
    PokemonStore = require('../../stores/pokemon'),
    ;

var PokemonDetail = React.createClass({
  getInitialState: function(){
    return {pokemon: this.getStateFromStore()};
  },

  getStateFromStore: function(){
    return PokemonStore.find(parseInt(this.props.params.pokemonId));
  },

  _onChange: function () {
    console.log("changing");
    this.setState({ pokemon: this.getStateFromStore() });
  },

  componentWillReceiveProps: function (newProps) {
    var id = parseInt(newProps.params.pokemonId);
    this.setState({pokemon: PokemonStore.find(id)});
  },

  componentDidMount: function () {
    PokemonStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    PokemonStore.removeListener(this._onChange);
  },

  render: function(){
    var pokemon = "";

    if (this.state.pokemon) {
      var moves = this.state.pokemon.moves.map(function(move){
        return <li key={move}>{move}</li>;
      });
      pokemon =
        (<div className="detail">
          <img src={this.state.pokemon.image_url}/>
          <br></br>
          <div>Attack: {this.state.pokemon.attack}</div>
          <br></br>
          <div>Defense: {this.state.pokemon.defense}</div>
          <br></br>
          <ul>Moves: {moves}</ul>
        </div>);
    }

    return (
      <div>
        <div className="pokemon-detail-pane">
          {pokemon}
          <ToysIndex/>
        </div>
      </div>
    );
  }
});

module.exports = PokemonDetail;
