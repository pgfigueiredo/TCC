<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Dijkstra</title>
		<script src="graph.js"></script>
	</head>
	<body>
		<script>
			var map = {a:{b:3,c:1},b:{a:2,c:1},c:{a:4,b:1}},
			    graph = new Graph(map);
			console.log(graph.findShortestPath('a', 'b'));
			console.log(graph.findShortestPath('a', 'c'));
			console.log(graph.findShortestPath('b', 'a'));
			console.log(graph.findShortestPath('b', 'c', 'b'));
			console.log(graph.findShortestPath('c', 'a', 'b'));
			console.log(graph.findShortestPath('c', 'b', 'a'));
		</script>
	</body>
</html>