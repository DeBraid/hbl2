Template.questions.rendered = function () {
    // init 
    $('.ui.accordion').accordion();
};


Template.questions.helpers({
  'candidate' : function () {
    return [
      { 'name' : 'Fred Eisenberger', 'answer' : 'Hamilton is great, please elect me.', path: '/profiles#Fred' },
      { 'name' : 'Brad Clark', 'answer' : 'Hamilton is great, please elect me.', path: '/profiles#Brad' },
      { 'name' : 'Brian McHattie', 'answer' : 'Hamilton is great, please elect me.', path: '/profiles#Brian' },
      { 'name' : 'View All', 'answer' : 'Hamilton is great, please elect me.', path: '/profiles#all' }
    ];
  }
});