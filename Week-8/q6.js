function allPathsSourceTarget(graph) {
	if (!graph) return [];
	const ans = [];
	dfs(graph, [0], ans);
	return ans;
}

function dfs(graph, path, ans) {
	const root = path[path.length - 1];
	if (root === graph.length - 1) {
		ans.push([...path]);
		return;
	}
	if (!graph[root] || !graph[root].length) return;
	for (let i = 0; i < graph[root].length; ++i) {
		path.push(graph[root][i]);
		dfs(graph, path, ans);
		path.pop();
	}
}

const graph = [[4, 3, 1], [3, 2, 4], [3], [4], []];
console.log(allPathsSourceTarget(graph));
