// switch statement & ternary operator
function foo() {
  const a = 42;

  switch (a) {
    case 2:
      console.log(a);
      break;
    case 10:
      console.log(a);
      break;
    case 42:
      console.log(a);
    break;
  }

  var b = (a > 41) ? "hello" : "world";
  console(b);
}

foo();
