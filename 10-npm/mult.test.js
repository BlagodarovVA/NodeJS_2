const mult = require('./mult');

test('умножаем 5 * 10 и получаем 50', () => {
	expect(mult(5, 10)).toBe(50);
});
