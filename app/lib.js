const lib = {};

lib.getARandomNumber = () => Math.floor(Math.random()*100);

lib.factorial = num => {
  if (typeof num !== 'number') return false;
  if (num === 1 || typeof num === 'undefined') {
    return 1;
  } else {
    return num * lib.factorial(num - 1);
  }
};

lib.checkIfPalindrome = str => {
  if (typeof str !== 'string') return false;
  const half = Math.floor(str.length/2);
  return str.substring(0,half) === str.substring(
    str.length % 2 === 0 ? half : half+1
  ).split('').reverse().join('');
};


module.exports = lib;
