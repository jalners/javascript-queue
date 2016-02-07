var Queue = require('../src/Queue');

describe('Data Structures in JavaScript: Queue', function() {
  var queue;

  beforeEach(function() {
    queue = new Queue();
  });

  it('should be defined queue structure', function() {
    expect(queue).toBeDefined();
  });

  it('should have size method', function() {
    expect(queue.size).toBeDefined();
  });

  it('should have enqueue method', function() {
    expect(queue.enqueue).toBeDefined();
  });

  it('should have dequeue method', function() {
    expect(queue.dequeue).toBeDefined();
  });

  it('should change size, add and remove item from queue', function() {
    expect(queue.size()).toEqual(0);

    queue.enqueue(2);
    expect(queue.size()).toEqual(1);

    queue.enqueue(4);
    expect(queue.size()).toEqual(2);

    queue.dequeue();
    expect(queue.size()).toEqual(1);
  });
});