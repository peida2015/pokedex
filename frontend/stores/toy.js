var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var ToyConstants = require('../constants/toyConstants');

var ToyStore = new Store(Dispatcher);

var _toys = {};

ToyStore.all = function () {
  var toys = [];

  Object.keys(_toys).forEach(function (toy_idx) {
    toys.push(_toys[toy_idx]);
  });
  return toys;
};

ToyStore.find = function (id) {
  return _toys[id];
};

ToyStore.resetToys = function (toys) {
  _toys = {};

  toys.forEach(function(toy, idx){
    _toys[idx] = toy;
  });
  ToyStore.__emitChange();
};


ToyStore.updateToy = function (toy) {
  _toys[toy.id] = toy;
  ToyStore.__emitChange();
};

ToyStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ToyConstants.TOYS_RECEIVED:
      this.resetToys(payload.toys);
      break;
    case ToyConstants.TOY_RECEIVED:
      this.updateToy(payload.toy);
      break;
    // default:
  }
};


module.exports = ToyStore;
