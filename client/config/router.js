Router.configure({
  layoutTemplate: 'basicLayout',
  notFoundTemplate: 'notFound',
  yieldTemplates: {
    'header': { to: 'header' },
    'footer': { to: 'footer' }
  }
});

Router.map(function () {
  this.route('blog', {
    path: '/blog',
    template: 'blog',
    yieldTemplates: {'homeButton': { to: 'header'}}
  })

  this.route('profiles', {
    path: '/profiles',
    template: 'profiles'
  });

  this.route('register', {
    path: '/register',
    template: 'register'
  });

});