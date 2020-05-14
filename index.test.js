const calculator = require('./index');

test('adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test('minus 2 - 1 to equal 1', () => {
    expect(calculator.minus(2, 1)).toBe(1);
});

test('multiply 2 x 2 to equal 4', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
});