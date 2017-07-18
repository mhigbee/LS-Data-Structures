class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(x) {
    const prop = Object.keys(this).length - 1;
    this[prop] = { value: x };
    this.reassign();
  }
  removeHead() {
    const keys = Object.keys(this);
    const cache = [];
    if (keys.length > 2) {
      cache.push(this[keys[0]]);
      delete this[keys[0]];
    }
    this.reassign();
    if (cache.length !== 0) return cache.pop().value;
  }
  contains(y) {
    const val = Object.values(this);
    for (let i = 0; i < val.length; i++) {
      if (val[i] && val[i].value === y) return true;
    }
    return false;
  }
  reassign() {
    const after = Object.keys(this);
    if (after.length > 2) {
      this.head = this[after[0]];
      this.tail = this[after[after.length - 3]];
    } else {
      this.head = null;
      this.tail = null;
    }
  }
}

module.exports = LinkedList;
