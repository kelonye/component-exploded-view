require('./modernizr');
window.$ = window.jQuery = require('jquery');
var Grid = require('./grid');

$(function() {
  Grid.init();
});