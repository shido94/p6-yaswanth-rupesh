const findJudge = function (N, trust) {
	const graph = new Map();
	for (let i = 1; i <= N; i++) {
		graph.set(i, 1);
	}
	for (let [v, e] of trust) {
		// console.log(v, e)
		graph.set(v, graph.get(v) - 1); // the node which is not  trusted -1
		graph.set(e, graph.get(e) + 1); // the node which is  trusted + 1
	}
	for (let [key, value] of graph) {
		if (value === N) return key;
	}
	return -1;
};

const n = 3,
	trust = [
		[1, 3],
		[2, 3],
		[3, 1],
	];

console.log(findJudge(n, trust));
