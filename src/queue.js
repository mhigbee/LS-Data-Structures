class Queue {
  constructor() {
    this.storage = [];
  }
  enqueue(value) {
    this.storage.push(value);
  }
  dequeue() {
    return this.storage.shift();
  }
  get size() {
    return this.storage.length;
  }
}

module.exports = Queue;

// Should have the methods: enqueue, dequeue, and a getter for the property size
// enqueue should add an item to the back of the queue.
// dequeue should remove an item from the front of the queue.
// size should return the number of items in the queue.
