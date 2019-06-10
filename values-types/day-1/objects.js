// objects are used for named properties
var obj = {
  a: "hello world", b: 42, c: true
};

console.log("obj.a:", obj.a);
console.log("obj.b:", obj.b);
console.log("obj.c:", obj.c);

// access object key via bracket notation
var fruit = {
  basket1: "Apples",
  basket2: "Kiwis",
};

var basket2 = "basket1";

console.log('fruit[myBasket]', fruit[basket2]); // Apples
console.log('fruit["myBasket"]', fruit["basket2"]); // Kiwis

// arrays are used for numerically positioned values
var arr = [
  "hello world",
  42,
  true
];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr.length);

// functions
function foo() {
  return 42;
}

foo.bar = "Hello World";
console.log(typeof foo);
console.log(typeof foo());
console.log(typeof foo.bar);