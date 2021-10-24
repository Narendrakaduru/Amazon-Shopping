var url = "api/products.json";

// ? in javascript we read using 
// * url.substring(url.indexOf("."));

var res = require("path").extname(url);
var res1 = require("path").basename(url);
var res2 = require("path").dirname(url);

console.log(res);
console.log(res1);
console.log(res2);