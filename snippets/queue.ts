import Stack from './stack';

class Queue<T> {
    private readonly in: Stack<T>;
    private readonly out: Stack<T>;

    constructor () {
        this.in = new Stack<T>();
        this.out = new Stack<T>();
    }

    enqueue (item: T) {
        this.in.push(item);
    }

    dequeue (): T | null {
        if (this.out.isEmpty()) {
            while (!this.in.isEmpty()) {
                this.out.push(this.in.pop() as T);
            }
        }
        return this.out.pop();
    }

    isEmpty () {
        return this.out.isEmpty() && this.in.isEmpty();
    }
}

export default Queue;
