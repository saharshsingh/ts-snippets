import Stack from '../stack';

describe('Stack', () => {
    let stack: Stack<number>;

    beforeEach(() => {
        stack = new Stack<number>();
    });

    test('should start empty', () => {
        expect(stack.isEmpty()).toBe(true);
    });

    test('should push and pop items in LIFO order', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.pop()).toBe(3);
        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(1);
        expect(stack.pop()).toBeNull();
    });

    test('should return null when popping an empty stack', () => {
        expect(stack.pop()).toBeNull();
    });

    test('should correctly report if the stack is empty', () => {
        expect(stack.isEmpty()).toBe(true);
        stack.push(42);
        expect(stack.isEmpty()).toBe(false);
        stack.pop();
        expect(stack.isEmpty()).toBe(true);
    });

    test('should correctly push and pop null and undefined values', () => {
        const nullishStack = new Stack<null | undefined>();
        expect(nullishStack.isEmpty()).toBe(true);
        nullishStack.push(undefined);
        nullishStack.push(null);
        nullishStack.push(undefined);

        expect(nullishStack.isEmpty()).toBe(false);
        expect(nullishStack.pop()).toBeUndefined();
        expect(nullishStack.isEmpty()).toBe(false);
        expect(nullishStack.pop()).toBeNull();
        expect(nullishStack.isEmpty()).toBe(false);
        expect(nullishStack.pop()).toBeUndefined();

        expect(nullishStack.isEmpty()).toBe(true);
        expect(nullishStack.pop()).toBeNull();
    });
});