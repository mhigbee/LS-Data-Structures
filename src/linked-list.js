class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(x) {
    const node = { value: x, next: null };
    if (!this.head) this.head = node;
    else this.tail.next = node;
    this.tail = node;
  }
  removeHead() {
    if (this.head) {
      const cache = this.head.value;
      this.head = this.head.next;
      if (!this.head) this.tail = null;
      return cache;
    }
  }
  contains(y) {
    let current = this.head;
    while (current) {
      if (current.value === y) return true;
      current = current.next;
    }
    return false;
  }
}

module.exports = LinkedList;
