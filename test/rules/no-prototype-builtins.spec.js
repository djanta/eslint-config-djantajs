'use strict';

/* eslint no-prototype-builtins: "error" */

let foo = () => { /* Foo empty function */ };

let bar = 'bar';

Object.prototype.hasOwnProperty.call(foo, 'bar');

Object.prototype.isPrototypeOf.call(foo, bar);

({}).propertyIsEnumerable.call(foo, 'bar');


// this will false
/*
 foo.hasOwnProperty('bar');
 foo.isPrototypeOf(bar);
 foo.propertyIsEnumerable('bar');
 */
