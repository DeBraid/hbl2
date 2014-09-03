Template.home.helpers({
  'feature' : function () {
    return [
      { 'text' : 'Candidates', 'icon' : 'user', 'path' : '#packages' },
      { 'text' : 'Blog', 'icon' : 'terminal', 'path' : '/blog' },
      { 'text' : 'Organizers', 'icon' : 'briefcase', 'path' : '#console-tool' }
    ]
  },
  'contributor' : function () {
    return [
      { 'name' : 'Hamilton Chamber of Commerce', 'logo' : '/images/hamchamber.jpg', 'homepage' : 'http://www.hamiltonchamber.on.ca/', 'description' : "Voice of Hamilton Business since 1845, now comprises almost 2,100 individuals representing about 1,200 employers, from over 130 diverse sectors, who collectively employ some 75,000 Hamiltonians Full Time. Our members reasonably reflect, in suitable proportion, the broader demographics of Hamilton’s business community. From these members, we have engaged a strong group of almost 300 active business volunteers who provide experience and talent through 12 Chamber Committees and Divisions (representing Ancaster, Dundas, Glanbrook). These volunteers represent thousands of years of “hands on” practical experience regarding local business and community development issues, a valuable consultative resource for Hamilton." },
      { 'name' : 'Realtors Assoc. of Hamilton-Burlington', 'logo' : '/images/realtors.png', 'homepage' : 'http://www.rahb.ca/', 'description' : 'Established in 1921, the REALTORS® Association of Hamilton-Burlington (RAHB) represents more than 2,500 real estate brokers and sales representatives from Hamilton, Burlington, and outlying areas. Members of the association may use the REALTOR® trademark, which identifies them as real estate professionals who subscribe to a strict code of ethics. The association operates the local Multiple Listing Service® (MLS®) and provides ongoing professional education courses for its members. In addition, RAHB is an active participant in the Home Ownership Affordability Partnership (HOAP) and holds an annual auction in support of local charities.' },
      { 'name' : 'Hamilton-Halton Homebuilders Assoc.', 'logo' : '/images/HHHBA.jpg', 'homepage' : 'http://www.hhhba.ca/', 'description' : 'The HHHBA has been the voice of the local residential construction industry since 1942. Our 250 members include builders, developers, skilled trades, suppliers and related service professionals. Maintaining a healthy housing market is crucial to a strong economy. We advocate for members on issues that affect our industry to ensure the residential construction voice is heard. We also advocate for consumers by working with elected officials and policy makers at all three levels of government to promote affordable, available and accessible new home construction. The HHHBA firmly supports the dream of home ownership and works to ensure that ALL Canadians are able to fulfill that dream.' }
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
  document.title = 'Hamilton Mayoral Election 2014 Homepage'
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
