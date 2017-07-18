class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(x) {
    const val = Object.keys(this);
    let prop;
    let next;
    if (!this.tail) prop = 1;
    else {
      prop = parseInt(val[val.length - 3], 10) + 1;
      this.tail.next = prop;
    }
    this[prop] = { value: x, next: null };
    if (!this.head) this.head = this[prop];
    this.tail = this[prop];
  }
  removeHead() {
    const keys = Object.keys(this);
    const cache = [];
    if (this.head) {
      cache.push(this.head);
      delete this[keys[0]];
    }
    if (cache.length) {
      this.head = this[cache[0].next];
      return cache.pop().value;
    }
  }
  contains(y) {
    const val = Object.values(this);
    for (let i = 0; i < val.length; i++) {
      if (val[i] && val[i].value === y) return true;
    }
    return false;
  }
}

module.exports = LinkedList;
