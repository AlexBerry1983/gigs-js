var UI = require('./views/ui.js');

var app = function(){

  var ui = new UI();
  ui.makeListItem();
  ui.makeSearchInput();
  ui.makeMap();


}

app()
