/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  insert(key, value) {
    if (!this[key]) this[key] = value;
    else {
      const cache = [[key, this[key]]];
      cache.push([key, value]);
      this[key] = cache;
    }
    this.resize();
  }
  remove(key) {
    if (this[key]) delete this[key];
  }
  retrieve(key) {
    return this[key];
  }
  resize() {
    const keys = Object.keys(this);
    if (keys.length >= (this.limit * 0.75)) this.limit *= 2;
  }
}

module.exports = HashTable;
