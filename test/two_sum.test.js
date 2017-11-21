const twosum = require('../two_sum');

test('test twosum with [3,2,4] and 6', () => {
  expect(twosum([3,2,4],6)).toEqual([1,2]);
});

test('test twosum with [3,3] and 6', () => {
  expect(twosum([3,3],6)).toEqual([0,1]);
});
