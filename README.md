# javascript-queue

Simple realization of queue for javascript.

### Getting Started

For testing you need to install some dependencies:

```bash
npm install
```

Then run tests:

```bash
npm test
```

### API
#### .size()

Method for returning the size of the queue.

```javascript
var queue = new Queue();

queue.enqueue(6); // queue is now {0: 6}
queue.size(); // 1
```

#### .enqueue(data)

Method for adding items into the queue.

```javascript
var queue = new Queue();

queue.enqueue(15); // queue is now {0: 15}
```

#### .dequeue()

Method for removing the first item from the queue.

```javascript
var queue = new Stack();

queue.enqueue(3); // queue is now {0: 3}
queue.enqueue(8); // queue is now {0: 3, 1: 8}
queue.dequeue(); // return 3, queue is now {1: 8}
```