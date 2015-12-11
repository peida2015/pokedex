var React = require('react'),
    History = require('react-router').History,
    ToyDetail = require('./ToyDetail');

var ToyIndexItem = React.createClass({
  mixins:[History],

  showDetail: function (e) {
    console.log("showing detail");
    var url = "toys/" + e.target.id;
    this.history.pushState(null, url);
  },

  render: function(){
    return(
      <li className="toy-list-item"
          onClick={this.showDetail}
          id = {this.props.toyId}>
        {this.props.name}
        <br></br>
        {this.props.happiness}
        <br></br>
        {this.props.price}
      </li>
    );
  }
});

module.exports = ToyIndexItem;
