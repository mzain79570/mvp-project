// Example test file

const { greet } = require('../src/index');

describe('Index module', () => {
  test('greet function returns correct greeting', () => {
    expect(greet('User')).toBe('Hello, User!');
  });
});