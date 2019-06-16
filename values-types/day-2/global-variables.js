// we need to reduce or dependence on global variables
var digit_name = function (n) {
  var names = ['zero', 'one', 'two', 'three', 'four', 'five'];

  return names[n];
}

console.log(digit_name(3)); // 'three'