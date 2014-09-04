Template.questions.rendered = function () {
    // init 
    $('.ui.accordion').accordion();
};


Template.questions.helpers({
  'candidate' : function () {
    return [
      { 'name' : 'Fred Eisenberger', 'answer' : 'in-depth Bio and Q&A', path: '/profiles#Fred' },
      { 'name' : 'Brad Clark', 'answer' : 'in-depth Bio and Q&A', path: '/profiles#Brad' },
      { 'name' : 'Brian McHattie', 'answer' : 'in-depth Bio and Q&A', path: '/profiles#Brian' },
      { 'name' : 'View All', 'answer' : 'complete list of Mayoral Candidates', path: '/profiles#all' }
    ];
  }
});