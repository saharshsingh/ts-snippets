import Queue from '../queue';

describe('Queue', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  test('should start empty', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  test('should enqueue and dequeue items in FIFO order', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBeNull();
  });

  test('should return null when dequeuing an empty queue', () => {
    expect(queue.dequeue()).toBeNull();
  });

  test('should correctly report if the queue is empty', () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(42);
    expect(queue.isEmpty()).toBe(false);
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  test('should handle interleaved enqueue and dequeue', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    expect(queue.dequeue()).toBe(10);
    queue.enqueue(30);
    expect(queue.dequeue()).toBe(20);
    expect(queue.dequeue()).toBe(30);
    expect(queue.dequeue()).toBeNull();
  });

  test('should correctly transfer elements from in-stack to out-stack', () => {
    queue.enqueue(100);
    queue.enqueue(200);
    queue.enqueue(300);

    expect(queue.dequeue()).toBe(100);
    queue.enqueue(400);
    expect(queue.dequeue()).toBe(200);
    expect(queue.dequeue()).toBe(300);
    expect(queue.dequeue()).toBe(400);
    expect(queue.isEmpty()).toBe(true);
  });
});
