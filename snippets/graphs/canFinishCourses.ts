const canFinishCourses = checkUsingBFS;
export default canFinishCourses;

// BFS

export function checkUsingBFS(count: number, prereqs: [number, number][]): boolean {
  const nodeLookup = buildGraph(count, prereqs);
  const graphRoots = getGraphRoots(nodeLookup);
  const inDegreeMap = buildInDegreeMap(nodeLookup);

  let taken = 0;
  const bfsQueue: Node[] = [...graphRoots];
  for (let course = bfsQueue.shift(); course !== undefined; course = bfsQueue.shift()) {
    taken++;

    for (const dependent of course.dependents) {
      if (inDegreeMap[dependent.course] !== undefined) {
        inDegreeMap[dependent.course] -= 1;
        if (inDegreeMap[dependent.course] === 0) {
          bfsQueue.push(dependent);
          delete inDegreeMap[dependent.course];
        }
      }
    }
  }

  return taken === count;
}

function getGraphRoots(lookup: NodeLookup): Node[] {
  return Object.values(lookup).filter((node) => getInDegreeForNode(node) === 0);
}

function buildInDegreeMap(lookup: NodeLookup): Record<number, number> {
  const inDegreeMap: Record<number, number> = {};
  for (const node of Object.values(lookup)) {
    const inDegree = getInDegreeForNode(node);
    if (inDegree > 0) {
      inDegreeMap[node.course] = inDegree;
    }
  }
  return inDegreeMap;
}

function getInDegreeForNode(node: Node): number {
  return node.prereqs.length;
}

// DFS

export function checkUsingDFS(count: number, prereqs: [number, number][]): boolean {
  const nodeLookup = buildGraph(count, prereqs);
  const visited = new Set<number>();
  for (let course = 0; course < count; course++) {
    const courseNode = nodeLookup[course];
    if (!canFinish(courseNode, visited)) {
      return false;
    }
  }
  return true;
}

function canFinish(courseNode: Node, visited: Set<number>, visiting = new Set<number>()): boolean {
  const { course, prereqs } = courseNode;

  if (visited.has(course)) {
    return true;
  }

  if (visiting.has(course)) {
    return false; // cycle detected
  }

  visiting.add(course);
  for (const prereq of prereqs) {
    if (!canFinish(prereq, visited, visiting)) {
      return false;
    }
  }
  visiting.delete(courseNode.course);

  visited.add(course);
  return true;
}

// common

type Node = { course: number; prereqs: Node[]; dependents: Node[] };

type NodeLookup = Record<number, Node>;

function buildGraph(count: number, prereqs: [number, number][]): NodeLookup {
  const lookup: NodeLookup = {};
  for (let course = 0; course < count; course++) {
    lookup[course] = { course, prereqs: [], dependents: [] };
  }

  for (const [prereq, dependent] of prereqs) {
    const prereqNode = lookup[prereq];
    const dependentNode = lookup[dependent];

    prereqNode.dependents.push(dependentNode);
    dependentNode.prereqs.push(prereqNode);
  }

  return lookup;
}
