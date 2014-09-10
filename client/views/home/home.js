Template.home.helpers({
  'feature' : function () {
    return [
      { 'text' : 'Candidates', 'icon' : 'user', 'path' : '#packages' },
      { 'text' : 'Our Priorities', 'icon' : 'file', 'path' : '#platform' },
      { 'text' : 'Mayoral Forum', 'icon' : 'coffee', 'path' : '#breakfast' },
      { 'text' : 'Blog', 'icon' : 'terminal', 'path' : '/blog' },
      { 'text' : 'Organizers', 'icon' : 'briefcase', 'path' : '#console-tool' }
    ]
  },
  'contributor' : function () {
    return [
      { 'name' : 'Hamilton Chamber of Commerce', 'acronym' : 'HCC', 'logo' : '/images/hamchamber.jpg', 'homepage' : 'http://www.hamiltonchamber.on.ca/', 'description' : "Voice of Hamilton Business since 1845, now comprises almost 2,100 individuals representing about 1,200 employers, from over 130 diverse sectors, who collectively employ some 75,000 Hamiltonians Full Time. Our members reasonably reflect, in suitable proportion, the broader demographics of Hamilton’s business community. From these members, we have engaged a strong group of almost 300 active business volunteers who provide experience and talent through 12 Chamber Committees and Divisions (representing Ancaster, Dundas, Glanbrook). These volunteers represent thousands of years of “hands on” practical experience regarding local business and community development issues, a valuable consultative resource for Hamilton." },
      { 'name' : 'Realtors Assoc. of Hamilton-Burlington', 'acronym' : 'RAHB', 'logo' : '/images/realtors.png', 'homepage' : 'http://www.rahb.ca/', 'description' : 'Established in 1921, the REALTORS® Association of Hamilton-Burlington (RAHB) represents more than 2,500 real estate brokers and sales representatives from Hamilton, Burlington, and outlying areas. Members of the association may use the REALTOR® trademark, which identifies them as real estate professionals who subscribe to a strict code of ethics. The association operates the local Multiple Listing Service® (MLS®) and provides ongoing professional education courses for its members. In addition, RAHB is an active participant in the Home Ownership Affordability Partnership (HOAP) and holds an annual auction in support of local charities.' },
      { 'name' : 'Hamilton-Halton Homebuilders Assoc.', 'acronym' : 'HHHBA', 'logo' : '/images/HHHBA.jpg', 'homepage' : 'http://www.hhhba.ca/', 'description' : 'The HHHBA has been the voice of the local residential construction industry since 1942. Our 250 members include builders, developers, skilled trades, suppliers and related service professionals. Maintaining a healthy housing market is crucial to a strong economy. We advocate for members on issues that affect our industry to ensure the residential construction voice is heard. We also advocate for consumers by working with elected officials and policy makers at all three levels of government to promote affordable, available and accessible new home construction. The HHHBA firmly supports the dream of home ownership and works to ensure that ALL Canadians are able to fulfill that dream.' }
    ];
  },
  candidateQuestions: function () {
    return [
      { 'questionStub' : 'Quality of Life',  'answer' : 'Coming soon...', 'question' : '1. What three things would you advocate for that would increase the quality of life for Hamiltonians, and attract new residents to the city?'},
      { 'questionStub' : 'Economy',  'answer' : 'Coming soon...', 'question' : '2. Hamilton has a tax base imbalance (77% residential vs. 23% commercial/industrial in 2013), coupled with an industrial vacancy rate of less than 2%. How will you overcome these challenges to grow the city’s economy and attract additional corporate investment?' }, 
      { 'questionStub' : 'Industry Clusters',  'answer' : 'Coming soon...', 'question' : '3. The City of Hamilton’s Economic Development division has identified several industry clusters with high potential (advanced manufacturing; agribusiness & food processing, clean tech; creative industries; and life sciences). What is the mayor’s role in attracting investment in these clusters?' },
      { 'questionStub' : 'Education & Youth',  'answer' : 'Coming soon...', 'question' : '4. Hamilton has some of the top post-secondary education institutions in Canada. What role would you play in the attraction, engagement and retention of youth in the city of Hamilton?'},
      { 'questionStub' : 'Red Tape',  'answer' : 'Coming soon...', 'question' : '5. Our members business ventures rely heavily on the ease with which their project applications are reviewed and processed by City staff; as well as the clarity and quality of information available to current and prospective business owners. Considering “government red tape” is a perennial election topic, what ideas and priorities do you have to foster more effective interaction between businesses and City Hall?'},
      { 'questionStub' : 'Business Community',  'answer' : 'Coming soon...', 'question' : '6. As Mayor, what steps will you take to improve and facilitate the voice of the business community with all levels of government?'}, 
      { 'questionStub' : 'Transportation',  'answer' : 'Coming soon...', 'question' : '7. As mayor what is your strategic vision for the future of Hamilton’s Transportation Infrastructure? This includes but is not limited to: The future of the Light Rail Transit initiative, Complete Streets conversion, Commercial freight infrastructure etc. '},
      { 'questionStub' : 'Industrial Development',  'answer' : 'Coming soon...', 'question' : '8. Hamilton has significant potential for industrial and commercial growth close to its transportation hubs, namely the Hamilton International Airport and the Hamilton Port Authority. What kind of development would you like to see around these hubs, especially the current and future brownfield vacancies at Hamilton’s Waterfront Industrial areas?'},
      { 'questionStub' : 'Housing Affordability',  'answer' : 'Coming soon...', 'question' : '9. The Hamilton commercial and residential real estate market is facing pressures such as limited land availability in the urban boundary and increasing land values, and affordability will become a greater challenge over the next few years. Furthermore, the expansion in scope and pricing of development application fees and development charges has put additional pressure on the real estate affordability. Lastly, 2015 will see a review of, among a number of other related plans, the Greenbelt, with an eye to modifying or expanding its limits.  What are your thoughts on ensuring that businesses and home buyers will continue to find affordability and choice in Hamilton?'},
      { 'questionStub' : 'Housing Opportunities',  'answer' : 'Coming soon...', 'question' : '10. Given Council’s adoption of the 10-year Housing and Homelessness Action Plan how would you advocate for increased housing opportunities for all Hamiltonians?'},
      { 'questionStub' : 'Land Transfer Tax',  'answer' : 'Coming soon...', 'question' : '11. New Research has found that, if enacted, the municipal land transfer tax in Hamilton will lead to the loss of $342 million in economic activity and a reduction of $176 million in GDP. If elected as Mayor, will you protect affordable home ownership and commit to not bringing a municipal land transfer tax to Hamilton?'},
      { 'questionStub' : 'Downtown Revitalization',  'answer' : 'Coming soon...', 'question' : '12. How do you envision the role of a revitalizing downtown core as a key pillar of Hamilton’s economic future and what policy goals will you champion to further facilitate it?'}
    ]
  }
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
