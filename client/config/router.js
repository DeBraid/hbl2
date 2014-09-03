Router.configure({
  layoutTemplate: 'basicLayout',
  notFoundTemplate: 'notFound',
  yieldTemplates: {
    'header': { to: 'header' },
    'footer': { to: 'footer' }
  }
});

Router.map(function () {
  this.route('/blog', {
    yieldTemplates: {'homeButton': { to: 'header'}}
  })

  this.route('profiles', {
    path: '/profiles',
    template: 'profiles'
  });

  this.route('fred', {
    path: '/fred',
    template: 'fred'
  });

  this.route('brad', {
    path: '/brad',
    template: 'brad'
  });

  this.route('brian', {
    path: '/brian',
    template: 'brian'
  });

});