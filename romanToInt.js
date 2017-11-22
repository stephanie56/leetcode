/**

  Roman to Ints

  Given a roman numeral, convert it to an integer.
  Input is guaranteed to be within the range from 1 to 3999.

**/

/**
 * @param {string} s
 * @return {number}
 */

function romanToInt(s) {

  var result = 0;

  s.split('').map((char, idx, arr) => {
    var currentCharVal = romanToVal(char);
    var nextCharVal = romanToVal(arr[idx+1]);

    if(!arr[idx+1] || currentCharVal >= nextCharVal){
      result += currentCharVal;
    }
    else {
      result -= currentCharVal;
    }
  });

   return result;
};

// helper function
function romanToVal(char){
  var number;
  switch(char){
    case 'I':
      number = 1;
      break;
    case 'V':
      number = 5;
      break;
    case 'X':
      number = 10;
      break;
    case 'L':
      number = 50;
      break;
    case 'C':
      number = 100;
      break;
    case 'D':
      number = 500;
      break;
    case 'M':
      number = 1000;
      break;
    default:
      number = 0;
  }
  return number;
}

module.exports = romanToInt;
