const { add } = require('./index'); // Import student's add function

describe('Math functions', () => {
  test('Test case 1: 1 + 1 = 2', () => {
    expect(add(1, 1)).toBe(2);
  });

  test('Test case 2: 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('Test case 3: 0 + 0 = 0', () => {
    expect(add(0, 0)).toBe(0);
  });

  test('Test case 4: -1 + 1 = 0', () => {
    expect(add(-1, 1)).toBe(0);
  });
});