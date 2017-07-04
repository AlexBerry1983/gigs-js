var MapWrapper = require('../mapWrapper.js');

var DisplayInfo = function(){
  this.currentlyOpen;
}

DisplayInfo.prototype = {
  makeMapInfo: function(event){

    if (this.currentlyOpen == event.target) { return };

    if (this.currentlyOpen !== event.target && this.currentlyOpen !== undefined ){

      var existingPopUp = document.querySelector('#pop-up');
      if (existingPopUp){
        var li = existingPopUp.parentNode;
        li.removeChild(existingPopUp);
      }
    }

    var popUp = document.createElement('div');
    this.makeMap(popUp, {lat: 55.953251, lng:-3.188267})
    popUp.id = 'pop-up';

    event.target.appendChild(popUp);


    this.currentlyOpen = event.target;


  },
  makeMap: function(el, center){
    var mainMap = new MapWrapper(el, center, 10);
    mainMap.addMarker(center);
  }
}

module.exports = DisplayInfo;
