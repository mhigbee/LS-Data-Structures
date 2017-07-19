/* eslint-disable no-unused-vars */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor() {
    this.limit = 8;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }
  insert(key, value) {
    const hash = this.getHash(key);
    let bucket;
    if (!this.storage.get(hash)) bucket = [];
    else bucket = this.storage.get(hash);
    this.storage.set(hash, bucket);
    const myBucket = function (k, ind) {
      if (k === key) {
        k[ind + 1] = value;
        return;
      }
    };
    this.storage.each(myBucket);
    bucket.push(key, value);
    this.resize(this.storage.length);
  }
  getHash(key) {
    if (typeof key === 'number' && Number.isInteger(key) && key < this.limit) {
      return key;
    }
    const hash = getIndexBelowMax(key, this.limit);
    return hash;
  }
  remove(key) {
    this.storage.set(this.getHash(key), undefined);
  }
  retrieve(key) {
    return this.storage.get(this.getHash(key));
  }
  resize(x) {
    if (x >= this.limit * 0.75) this.limit *= 2;
  }
}

module.exports = HashTable;
