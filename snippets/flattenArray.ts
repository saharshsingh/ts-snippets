import Stack from './stack';

type NestedArray<T> = Array<T | NestedArray<T>>;

export const flattenArrayRecursively = <T>(array: NestedArray<T>): T[] => {
  const flattened: T[] = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      flattened.push(...flattenArrayRecursively(element));
    } else {
      flattened.push(element);
    }
  }
  return flattened;
};

export const flattenArrayIteratively = <T>(array: NestedArray<T>): T[] => {
  const flattened: T[] = [];
  const dfsStack = new Stack<T | NestedArray<T>>();
  dfsStack.push(array);

  while (!dfsStack.isEmpty()) {
    const element = dfsStack.pop();
    if (Array.isArray(element)) {
      pushElementsToStackInReverse(element, dfsStack);
    } else {
      flattened.push(element as T);
    }
  }

  return flattened;
};

const pushElementsToStackInReverse = <T>(
  array: NestedArray<T>,
  stack: Stack<T | NestedArray<T>>
) => {
  for (let i = array.length - 1; i >= 0; i--) {
    stack.push(array[i]);
  }
};

export default flattenArrayIteratively;
