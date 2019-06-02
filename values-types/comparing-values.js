// equality & inequality

// explicit coercion
var a = "42";
console.log(typeof a); // string
var b = Number(a);
console.log(typeof a); // string
console.log(typeof b); // number

// implicit coercion
var c = "42";
var d = c * 1;
console.log(typeof c);
console.log(typeof d);