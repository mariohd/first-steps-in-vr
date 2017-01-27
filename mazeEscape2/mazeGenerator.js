
var mazeConstructed = display(maze(5,5));

var lines = mazeConstructed.split("\n");
map = [];
for (i = 0; i < lines.length; i++) {
	line = lines[i];
	mapLine = []
	c = "";
	for (y = 0; y < line.length; y++) {
		if (y % 4 == 0) {
			if (line[y] === "|" || line[y] === "+") {
				mapLine.push(1);
			} else 

			if (line[y] === " ") {
				mapLine.push(0);
			}
		} else {
			c += line[y];
		}

		if (c.length == 3) {
			if (c === "   ") {
				mapLine.push(0);
			}

			if (c === "---") {
				mapLine.push(1);
			}
			c = "";
		}
	}
	map.push(mapLine);
}

var flattened = map.reduce(function(a, b) {
  return a.concat(b);
});
flattened[flattened.length - 1] = 2;
h = map.length;
w = map[0].length;
console.log(mazeConstructed)
console.log(flattened)
var map =
{
 "data": flattened,
 "height": h,
 "width":w
}