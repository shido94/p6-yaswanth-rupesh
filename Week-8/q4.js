class Graph {
	constructor(Vertices) {
		this.Vertices = Vertices;

		this.graph = new Array(Vertices + 1);
		for (let i = 0; i < Vertices + 1; i++) {
			this.graph[i] = new Array(Vertices + 1);

			// Initialize all entries
			// as false to indicate
			// that there are
			// no edges initially
			for (let j = 0; j < Vertices + 1; j++) {
				this.graph[i][j] = 0;
			}
		}

		// Initializing node to itself
		// as it is always reachable
		for (let i = 1; i <= Vertices; i++) this.graph[i][i] = 1;
	}

	// Function to add edge between nodes
	addEdge(start, end) {
		this.graph[start][end] = 1;
		this.graph[end][start] = 1;
	}

	// Function to check if nodes are reachable
	isReachable(source, destination) {
		if (this.graph[source][destination] == 1) return true;
		else return false;
	}

	// Function to compute the path
	computePaths() {
		for (let k = 1; k <= this.Vertices; k++) {
			for (let i = 1; i <= this.Vertices; i++) {
				for (let j = 1; j <= this.Vertices; j++)
					this.graph[i][j] =
						this.graph[i][j] |
						(this.graph[i][k] != 0 && this.graph[k][j] != 0
							? 1
							: 0);
			}
		}
	}
}

const edges = [
	[0, 1],
	[0, 2],
	[3, 5],
	[5, 4],
	[4, 3],
];
let graph = new Graph(6);
graph.addEdge(...edges[0]);
graph.addEdge(...edges[1]);
graph.addEdge(...edges[2]);
graph.addEdge(...edges[3]);
graph.addEdge(...edges[4]);
graph.computePaths();

let source = 0,
	destination = 5;
console.log(graph.isReachable(source, destination));
