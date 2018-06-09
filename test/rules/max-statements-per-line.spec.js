'use strict';

/* eslint-disable no-unused-vars */
let bar; let baz;
let condition = false; let discriminant = 1;
if (condition) bar = 1; if (condition) baz = 2;
for (let i = 0; i < 1; ++i) { bar = 1; }
switch (discriminant) { default: break; }
let foo = function foo () { bar = 1; };
(function foo () { /* let bar = 1; */ })();
/* eslint-enable no-unused-vars */
