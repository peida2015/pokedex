var React = require('react'),
    ReactDOM = require('react-dom'),
    // $ = require('jquery'),
    ApiUtil = require('./util/ApiUtil');


// var Elements = {
//   <div>Hi</div>
// };

$(function () {
  var root = document.getElementById('root');
  ApiUtil.fetchAllPokemons();
  // var root = $('#root');
  ReactDOM.render(<div>hi</div>, root);
});
