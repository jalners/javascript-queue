(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Queue = factory();
  }
}(this, function () {
  var Queue = function() {
    this._start = 0;
    this._end = 0;
    this._storage = {};
  };

  Queue.prototype.size = function() {
    return this._end - this._start;
  };

  Queue.prototype.enqueue = function(data) {
    this._storage[this._end] = data;
    this._end++;
  };

  Queue.prototype.dequeue = function() {
    var deletedData;

    if (this.size() > 0) {
      deletedData = this._storage[this._start];
      delete this._storage[this._start];
      this._start++;

      return deletedData;
    }
  };

  return Queue;
}));