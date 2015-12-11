var React = require('react'),
    ApiUtil = require('../../util/ApiUtil'),
    ToyIndexItem = require('./ToyIndexItem'),
    ToyStore = require('../../stores/toy'),
    ToyActions = require('../..actions/toyActions');

var ToysIndex = React.createClass({
  getInitialState: function() {
    return { toys: ToyStore.all() };
  },

  _onChange: function(){
    this.setState({toys: ToyStore.all()});
  },

  componentDidMount: function() {
    ToyStore.addListener(this._onChange);
    ApiUtil.fetchAlltoys();
  },

  componentWillUnmount: function() {
    ToyStore.removeListener(this._onChange);
  },

  render: function(){
    return(
      <ul>
        <ToyIndexItem/>
      </ul>
    );
  }
});

module.exports = ToysIndex;
