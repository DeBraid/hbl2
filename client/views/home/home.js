Template.home.helpers({
  'feature' : function () {
    return [
      { 'text' : 'Meet the Candidates', 'icon' : 'archive', 'path' : '#packages' },
      { 'text' : 'Blog', 'icon' : 'terminal', 'path' : '/blog' },
      { 'text' : 'Meet the Contributors', 'icon' : 'archive', 'path' : '#console-tool' }
    ]
  },
  'candidate' : function () {
    return [
      { 'name' : 'Joe Smith', 'path' : 'https://github.com/EventedMind/iron-router' },
      { 'name' : 'Jeff Munroe', 'path' : 'https://github.com/aldeed/meteor-collection2' },
      { 'name' : 'Jane Kennedy', 'path' : 'http://semantic-ui.com/' },
      { 'name' : 'Sally Struthers', 'path' : 'http://lesscss.org/' },
      { 'name' : 'Raphael Sewerturtle', 'path' : 'http://jquery.com/' }
    ];
  },
  'contributor' : function () {
    return [
      { 'name' : 'Some Name', 'description' : 'Here is the description of Some Name' },
      { 'name' : 'Some Name', 'description' : 'Here is the description of Some Name' },
      { 'name' : 'Some Name', 'description' : 'Here is the description of Some Name' },
      { 'name' : 'Some Name', 'description' : 'Here is the description of Some Name' },
      { 'name' : 'Some Name', 'description' : 'Here is the description of Some Name' },
      { 'name' : 'Some Name', 'description' : 'Here is the description of Some Name' },
      { 'name' : 'Some Name', 'description' : 'Here is the description of Some Name' }
    ];
  },
  'semanticElement' : function () {
    return [
      { 'what' : 'Large Buttons', 'withBootstrap' : 'btn btn-lg', 'withSemanticUI' : 'ui large button' },
      { 'what' : 'One column', 'withBootstrap' : 'col-md-1', 'withSemanticUI' : 'one wide column' },
      { 'what' : 'Vertical Menu / Navigation', 'withBootstrap' : 'nav nav-pills', 'withSemanticUI' : 'ui vertical menu' }

    ];
  },
  'bootstrapCode' : function () {
    return '<div class="btn btn-primary btn-lg"></div>';
  },
  'folder' : function () {
    return [
      { 'root' : 'client', 'children' :
        ['compatibility', 'config', ' lib', ' routes', ' startup', ' stylesheets', 'subscriptions',
          'modules', 'views']
      },
      { 'root' : 'model' },
      { 'root' : 'private' },
      { 'root' : 'server', 'children' : ['fixtures', 'lib', 'publications', 'startup', 'tests'] },
      { 'root' : 'public' },
      { 'root' : 'meteor-boilerplate' },
      { 'root' : 'meteor-boilerplate.bat' }
    ]
  }
});

Template.home.events({
});


Template.home.rendered = function () {
  // @see: http://stackoverflow.com/questions/5284814/jquery-scroll-to-div
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }

    return true;
  });
};
