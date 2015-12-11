var React = require('react'),
    History = require('react-router').History,
    PokemonStore = require('../../stores/pokemon');

var PokemonIndexItem = React.createClass ({
  mixins:[History],

  showDetail: function (e) {
    console.log("showing detail");
    var url = "pokemon/" + e.target.id;
    this.history.pushState(null, url);
  },

  render: function () {
    return (
      <li className="poke-list-item"
          onClick={ this.showDetail }
          id = {this.props.pokemonId} >
        { this.props.name }<br></br>
        { this.props.type }
      </li>
    );
  }
});

module.exports = PokemonIndexItem;
