var Dropdown = function (inputHook) {
  this.ul = document.createElement('ul');
  this.inputHook = inputHook;
  this.inputHook.insertAdjacentElement("afterend", this.ul);

  this.setupEventListeners();
}

Dropdown.prototype = {
  render: function (objs) {
    this.ul.id = 'dropdown';
    this.clear();

    for (gig of objs._embedded.events) {
      var gigLi = this.createDropdownLi(gig);
      this.ul.appendChild(gigLi);
    }
  },

  createDropdownLi: function (gig) {
    var li = document.createElement('li');
    li.innerText = gig.name;
    li.classList.add('dropdownItem');
    li.addEventListener('click', function () {
      console.log(gig);
      this.clear();
    }.bind(this));
    return li;
  },

  setupEventListeners: function () {
    this.inputHook.addEventListener('focus', function () {
      console.log('FOCUSED');
    });
    this.inputHook.addEventListener('focusout', function (event) {
      console.log(document.querySelectorAll('.dropdownItem:hover'));
      if (document.querySelectorAll('.dropdownItem:hover').length === 0){
        this.clear();
      };
      console.log('BLUR', this.inputHook);
    }.bind(this));
  },

  clear: function () {
    this.ul.innerHTML = "";
  }
}

module.exports = Dropdown;
