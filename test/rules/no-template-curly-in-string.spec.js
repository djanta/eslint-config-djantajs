'use strict';

/* eslint no-template-curly-in-string: "error" */

let name = 'Myname';

`Hello ${name}!`;

`Time: ${12 * 60 * 60 * 1000}`;

// This will false
/*
 "Hello ${name}!";
 'Hello ${name}!';
 */
