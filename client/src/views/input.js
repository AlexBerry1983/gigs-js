var Dropdown = require('./dropdown.js');
var request = require('../request.js');
var Input = function () {

};

Input.prototype = {
  create: function () {
    var body = document.getElementsByTagName('body')[0];
    var search = document.createElement('input');
    body.appendChild(search);

    search.addEventListener('input', function() {
      var url = this.makeRequestString('GB', search.value, 'Edinburgh', '2017-07-04T14:00:00Z', '2017-07-10T14:00:00Z' );
      request.getRequest(url , function () {
        var dropdown = new Dropdown();
        dropdown.render(JSON.parse(this.responseText));
      })
    }.bind(this))

  },

  makeRequestString: function(countryCode, keyword, city, startDate, endDate){
    var url = 'https://app.ticketmaster.com/discovery/v2/events.json?countryCode='
    var newUrl = url + countryCode + '&keyword=' + keyword + '&city='+ city + '&startDateTime='+ startDate + '&endDateTime='+ endDate + '&apikey=XGGKz7PnerTTqIPRLLKeEaD3UAHd9ARu'
    return newUrl;
  }






}


module.exports = Input;
