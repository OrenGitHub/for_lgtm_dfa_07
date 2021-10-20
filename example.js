const utils = require('utils')
function foo(x) { x.property = utils.escapeHtml('http://www.github.com/?foo=шеллы'); }
var x = {};
foo(x);
decodeURI(x.property);
