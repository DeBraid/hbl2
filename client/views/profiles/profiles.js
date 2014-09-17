Template.all.helpers({
  person: function  (argument) {
    return [
      { 'fullname' : 'Baldasaro, Michael', 'name' : 'Michael', 'email' : 'michaelbaldasaro@me.com', 'bio' : 'bar' },
      { 'fullname' : 'Butt, Ejaz', 'name' : 'Ejaz', 'email' : 'ejazbutt12@hotmail.com', 'bio' : 'bar' },
      { 'fullname' : 'Clancy, Mike', 'name' : 'Mike', 'email' : 'mikeclancy2005@gmail.com', 'bio' : 'bar' },
      { 'fullname' : 'Iamonico, Nick', 'name' : 'Nick', 'email' : 'n/a', 'bio' : 'bar' },
      { 'fullname' : 'Lavigne, Crystal', 'name' : 'Crystal', 'email' : 'crystalx4@hotmail.ca', 'bio' : 'bar' },
      { 'fullname' : 'Ryerson, Phil', 'name' : 'Phil', 'email' : 'philryerson@gmail.com', 'bio' : 'bar' },
      { 'fullname' : 'Tavares, Ricky', 'name' : 'Ricky', 'email' : 'rickyseeds@gmail.com', 'bio' : 'bar' }
    ]
  }  
});

Template.profiles.rendered = function () {
  $('.ui.accordion').accordion();
};

