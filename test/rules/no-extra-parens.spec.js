'use strict';

// Rule: no-extra-parens

let a = () => { /* Just an empty function body */ };

let b = () => { /* Just an empty function body */ };

let bar = () => { return false; /* Just an empty function body */ };

let x = 'dummy';

let c = 'dummy';

let foo;

(0).toString();

Object.prototype.toString.call();

({}.toString.call());

bar() ? a() : b();

(/^a$/).test(x);

// conditionalAssign
// while ((foo = bar())) {}

if ((foo = bar())) { console.log(foo); }

// do; while ((foo = bar()));

// for (;(a = b););

// nestedBinaryExpressions
x = a || (b && c);
x = a + (b * c);
x = (a * b) / c;
