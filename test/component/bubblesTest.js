let test = require('tape');
let d3X3dom = require("../../");

test("Test Bubbles Component, component.bubbles()", function(t) {
	let bubbles = d3X3dom.component.bubbles();

	// Test dimensions getter / setter function
	t.deepEqual(bubbles.dimensions(), { x: 40, y: 40, z: 40 }, "Default dimensions");
	bubbles.dimensions({ x: 10, y: 20, z: 30 });
	t.deepEqual(bubbles.dimensions(), { x: 10, y: 20, z: 30 }, "Changed dimensions");

	// Test xScale getter / setter function
	t.deepEqual(bubbles.xScale(), undefined, "Default xScale is undefined");
	bubbles.xScale(0.2);
	t.deepEqual(bubbles.xScale(), 0.2, "Changed xScale is set");

	// Test yScale getter / setter function
	t.deepEqual(bubbles.yScale(), undefined, "Default yScale is undefined");
	bubbles.yScale(0.1);
	t.deepEqual(bubbles.yScale(), 0.1, "Changed yScale is set");

	// Test zScale getter / setter function
	t.deepEqual(bubbles.zScale(), undefined, "Default zScale is undefined");
	bubbles.zScale(0.2);
	t.deepEqual(bubbles.zScale(), 0.2, "Changed zScale is set");

	// Test sizeScale getter / setter function
	t.deepEqual(bubbles.sizeScale(), undefined, "Default sizeScale is undefined");
	bubbles.sizeScale(2);
	t.deepEqual(bubbles.sizeScale(), 2, "Changed sizeScale is set");

	// Test sizeDomain getter / setter function
	t.deepEqual(bubbles.sizeDomain(), [0.5, 4.0], "Default sizeDomain");
	bubbles.sizeDomain([0.2, 5.0]);
	t.deepEqual(bubbles.sizeDomain(), [0.2, 5.0], "Changed sizeDomain");

	// Test color getter / setter function
	t.deepEqual(bubbles.color(), "orange", "Default color");
	bubbles.color("yellow");
	t.deepEqual(bubbles.color(), "yellow", "Changed color");

	t.end();
});