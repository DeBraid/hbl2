Template.questions.rendered = function () {
    // init 
    $('.ui.accordion').accordion();
};


Template.questions.helpers({
  'candidate' : function () {
    return [
      { 'name' : 'Fred Eisenberger', 'answer' : 'Hamilton is great, please elect me.' },
      { 'name' : 'Brad Clark', 'answer' : 'Hamilton is great, please elect me.' },
      { 'name' : 'Brian McHattie', 'answer' : 'Hamilton is great, please elect me.' }
    ];
  }
});