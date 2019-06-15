// immediate function returns a function
var names = ['zero', 'one', 'two', 'three', 'four', 'five'];

var digit_name = (function () {
  return function (n) {
    return names[n];
  };
}());

console.log(digit_name(3)); // 'three'