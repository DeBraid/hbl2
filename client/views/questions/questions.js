Template.questions.events({
  'click': function () {
    $('.ui.accordion')
        .accordion()
      ;
  }
});

Template.questions.helpers({
  'candidate' : function () {
    return [
      { 'name' : 'Joe Smith', 'answer' : 'https://github.com/EventedMind/iron-router' },
      { 'name' : 'Jeff Munroe', 'answer' : 'https://github.com/aldeed/meteor-collection2' },
      { 'name' : 'Jane Kennedy', 'answer' : 'http://semantic-ui.com/' },
      { 'name' : 'Sally Struthers', 'answer' : 'http://lesscss.org/' },
      { 'name' : 'Raphael Sewerturtle', 'answer' : 'http://jquery.com/' }
    ];
  }
});