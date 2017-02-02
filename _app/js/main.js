// Define Dependencies
var detect = require('./lib/detect');
var jquery = require('./lib/jquery');
var shopify = require('./modules/shopify');
// var history = require('./modules/history');
// var jekyllAjax = require('./modules/jekyllAjax');
// // Detect if JavaScript is enabled
detect();
jquery();
shopify();

// history();
// jekyllAjax();
//
// // Print success message to console
// console.log('<head> scripts loaded.')
