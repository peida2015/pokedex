var React = require('react'),
    ReactDOM = require('react-dom'),
    Pokemon = require('./stores/pokemon'),
    PokemonsIndex = require('./components/pokemons/pokemonsIndex'),
    PokemonDetail = require('./components/pokemons/PokemonDetail'),
    ToyDetail = require('./components/toys/ToyDetail'),
    Router = require('react-router').Router,
    Route = require('react-router').Route;


// var Elements = {
//   <div>Hi</div>
// };

var App = React.createClass({
  render: function () {
    return (
      <div id="pokedex">
        <div className="pokemon-index-pane">
          <PokemonsIndex />
        </div>
        {this.props.children}
      </div>
    );}
});



$(function () {
  var root = document.getElementById('root');
  // var root = $('#root');
  var routes = (
    <Route path="/" component={ App }>
      <Route path="pokemon/:pokemonId" component={ PokemonDetail }>
        <Route path="toys/:toyId" component={ ToyDetail }>

        </Route>
      </Route>
    </Route>
  );

  ReactDOM.render(<Router>
    { routes }
  </Router>, root);

});
