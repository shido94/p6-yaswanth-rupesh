const { sum, diff, product } = require('../src/main');

/**
 * Testing each independently
 */

// test('sum of two digits', (done) => {
// 	expect(sum(5, 5)).toStrictEqual(10);
// 	expect(sum(100, 200)).toStrictEqual(300);
// 	done();
// });

// test('diff of two digits', (done) => {
// 	expect(diff(10, 10)).toStrictEqual(0);
// 	expect(diff(200, 100)).toStrictEqual(100);
// 	done();
// });

// test('product of two digits', (done) => {
// 	expect(product(10, 10)).toStrictEqual(100);
// 	expect(product(200, 100)).toStrictEqual(20000);
// 	done();
// });

/**
 * We can also test all together
 */

describe('Testing with done', () => {
	test('sum of two digits', (done) => {
		expect(sum(5, 5)).toStrictEqual(10);
		expect(sum(100, 200)).toStrictEqual(300);
		done();
	});

	test('diff of two digits', (done) => {
		expect(diff(10, 10)).toStrictEqual(0);
		expect(diff(200, 100)).toStrictEqual(100);
		done();
	});

	test('product of two digits', (done) => {
		expect(product(10, 10)).toStrictEqual(100);
		expect(product(200, 100)).toStrictEqual(20000);
		done();
	});
});
