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
    yieldTemplates: {'homeButton': {to: 'header'}}
  })
});