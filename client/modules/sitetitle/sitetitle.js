Deps.autorun(function () {
  document.title = Session.get('sitetitle') || 'Hamilton Business Leaders';
});

window.SiteTitle = {
  'set' : function (t) {
    Session.set('sitetitle', t);
  },
  'get' : function () {
    return Session.get('sitetitle');
  },
  'equals' : function (v) {
    return Session.equals('sitetitle', v);
  }
};
