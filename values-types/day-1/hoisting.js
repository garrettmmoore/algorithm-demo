var a = 2;

foo();

function foo() {
  a = 3;

  console.log(a); // 3

  var a; // hoisted to the top of foo;
}

console.log(a); // 2