class Stack {
  constructor() {
    this.items = [];
  }
  add(x) {
    this.items.push(x);
  }
  remove() {
    return this.items.pop();
  }
  get size() {
    return this.items.length;
  }
}

module.exports = Stack;
