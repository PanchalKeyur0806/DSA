class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  //   add vertext to grap
  addVertext(key) {
    if (!this.adjacencyList[key]) this.adjacencyList[key] = [];
  }

  //   add edge ebtween two vertexes
  addEdge(vertex1, vertext2) {
    // if vertext1 is found, add edge
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].push(vertext2);
    }

    // if vertext2 is found, add edge
    if (this.adjacencyList[vertext2]) {
      this.adjacencyList[vertext2].push(vertex1);
    }
  }

  // remove edge between two vertexes
  removeEdge(vertext1, vertext2) {
    // if vertext1 and vertext2 doesn't found return
    if (!vertext1 || !vertext2) {
      return;
    }

    // if vertext1 is found, remove the edge
    if (this.adjacencyList[vertext1]) {
      const removed = this.adjacencyList[vertext1].filter(
        (vertext) => vertext !== vertext2,
      );
      this.adjacencyList[vertext1] = removed;
    }

    // if vertext2 is found, remove the edge
    if (this.adjacencyList[vertext2]) {
      const removed = this.adjacencyList[vertext2].filter(
        (vertext) => vertext !== vertext1,
      );
      this.adjacencyList[vertext2] = removed;
    }
  }
}

const graph = new Graph();
graph.addVertext("Keyur");
graph.addVertext("Manish");
graph.addVertext("Vatsal");

graph.addEdge("Keyur", "Manish");
graph.addEdge("Manish", "Vatsal");
graph.addEdge("Keyur", "Vatsal");

graph.removeEdge("Keyur", "Manish");
graph.removeEdge("Keyur", "Vatsal");

console.log(graph);
