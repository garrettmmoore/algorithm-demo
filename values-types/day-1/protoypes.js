var foo = {
  a: 42
};

var bar = Object.create(foo);

bar.b = 'hello world';

bar.b; // 'hello world'
bar.a; // 42