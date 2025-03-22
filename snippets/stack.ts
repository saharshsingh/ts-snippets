type StackNode<T> = {
  val: T;
  next: StackNode<T> | null;
};

class Stack<T> {
  private head: StackNode<T> | null;

  constructor() {
    this.head = null;
  }

  push(item: T) {
    this.head = { val: item, next: this.head };
  }

  pop(): T | null {
    const popped = this.head;
    this.head = popped?.next ?? null;
    return popped !== null ? popped.val : null;
  }

  isEmpty() {
    return this.head === null;
  }
}

export default Stack;
