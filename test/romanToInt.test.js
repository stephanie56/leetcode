const romanToInt = require('../romanToInt');

test('simple add ups', () => {
  expect(romanToInt('III')).toBe(3);
});

test('real case', () => {
  expect(romanToInt('DCXXI')).toBe(621);
});
