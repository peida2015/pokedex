var React = require('react'),
    ApiUtil = require('../../util/ApiUtil'),
    ToyStore = require('../../stores/toy');

var React = require('react');

var ToyDetail = React.createClass({
  getInitialState: function(){
    return {toy: this.getStateFromStore()};
  },

  getStateFromStore: function(){
    return ToyStore.find(parseInt(this.props.params.toyId));
  },

  _onChange: function () {
    // console.log("changing");
    this.setState({ toy: this.getStateFromStore() });
  },

  componentWillReceiveProps: function (newProps) {
    var id = parseInt(newProps.params.toyId);
    this.setState({toy: ToyStore.find(id)});
  },

  componentDidMount: function () {
    ToyStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    ToyStore.removeListener(this._onChange);
  },

  render: function(){
    var toy = "";

    if (this.state.toy) {
      var moves = this.state.toy.moves.map(function(move){
        return <li key={move}>{move}</li>;
      });
      toy =
        (<div className="detail">
          <img src={this.state.toy.image_url}/>
      //     <br></br>
      //     <div>Attack: {this.state.toy.attack}</div>
      //     <br></br>
      //     <div>Defense: {this.state.toy.defense}</div>
      //     <br></br>
      //     <ul>Moves: {moves}</ul>
        </div>);
    }

    return (
      <div>
        <div className="toy-detail-pane">
          {toy}
          <ToysIndex/>
        </div>
        {this.props.children}
      </div>
    );  }
});

module.exports = ToyDetail;
