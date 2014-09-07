Template.profiles.helpers({
  profile: function () {
    return [
      { 'fullname' : 'Brad Clark', 'name' : 'Brad', 'imagePath' : 'images/brad.png', 'bio' : '<p><strong>Brad Clark</strong> was born and raised in Hamilton, attended Our Lady of Lourdes Catholic Elementary School and Hill Park Secondary School. He received a diploma in Radio Broadcasting from Mohawk College and certification in Non-Profit Management from McMaster University.</p><p>Brad was elected to the Ontario Legislature in 1999 as the Member of Provincial Parliament for Stoney Creek. He served the Province as Minister of Transportation, Minister of Labour and Parliamentary Assistant to the Minister of Health and Long-Term Care. He was also the Commissioner on the Board of Internal Economy, Vice-Chair of the Standing Committee on the Legislative Assembly and Assistant Deputy Government Whip. In 2006, Brad was elected Ward 9 Councillor representing Stoney Creek-Heritage Green. He was re-elected in 2010 for a second term and currently serves as Chair of the Development Charges review Sub Committee. He is also on the General Issues Committee, Board of Health, Licensing Tribunal, Audit and Administration, Economic Development and Planning, Heritage Green Community Trust, and the Newalta Neighbourhood Liaison Committee. Outside of politics, Brad has been actively involved in the non-profit sector lending his expertise to roles in fund development, public relations and marketing. In recent years he has served our community as Executive Director of the Conservation Foundation of Hamilton, the Vice-President of Development at St. Peter’s Hospital Foundation as well as on various other organizations supporting those affected by autism. He is also involved with the local Knights of Columbus.</p><p>On a national level, Brad served as the National Development Director for the Catholic Missions of Canada and most recently as the CEO of the Canadian Recreation Vehicle Association.  Brad and his wife Linda live in Stoney Creek. They have a daughter, two sons and two adorable grandchildren.</p>' },
      { 'fullname' : 'Fred Eisenberger', 'name' : 'Fred', 'imagePath' : 'images/fred.jpg', 'bio' : '<p><strong>Fred Eisenberger</strong> was born in Amsterdam and came to Canada with his family when he was eight years old. He attended school in Hamilton, graduating from both Sir Winston Churchill Secondary School and Mohawk College.He has been chair of the Hamilton Port Authority and served previously as a Hamilton city councillor and then as Hamilton’s mayor.</p><p>As mayor, Fred worked with council to bring about a number of important initiatives including a complete renovation of Hamilton City Hall, the central library and the historic farmers market.  Through his leadership, Fred was successful in encouraging his council colleagues to pass an annual $1.5 million increase to the City’s economic development departmental budget. This helped bring about tangible results including a new Tim Horton coffee roasting facility in the Ancaster Business Park, and securing Canada Bread as the anchor tenant in the citys new Red Hill Business Park.</p><p>Upon leaving office in 2010, Fred became president and chief executive of the Canadian Urban Institute, allowing him to be involved in the development of cutting edge, progressive urban thinking.  Fred is again running for mayor because he has a passion for Hamilton and is bursting with energy to do all he can to create opportunity and prosperity for all Hamiltonians.  Fred and his wife Diane, a dental hygienist, live in east Hamilton. They have two grown children. Brett is a teacher and Alida is employed as a flight attendant with Air Canada.</p>',  },
      { 'fullname' : 'Brian McHattie', 'name' : 'Brian', 'imagePath' : 'images/brian.jpg', 'bio' : '<p><strong>Brian McHattie</strong> has served as the Councillor for Ward 1 since 2003. He lives in Ward 1 with his wife Elaine, a Hamilton-based physician who specializes in the training of rural doctors, and their son Mitch.</p><p>He has a degree in Environmental Studies from the University of Waterloo and a Master of Science in Rural Planning & Community Development from the University of Guelph. His thesis work involved a 6 month stay in India where he studied a farmers movement in Karnataka.</p><p>He’s a Registered Professional Planner, a member of the Ontario Professional Planners Institute, and the Canadian Institute of Planning. Brian spent 10 years as an industrial salesperson, supplying occupational health and safety products to Hamilton industry. Over the years as a sales rep he became very familiar with every business along Burlington Street, a huge number of which became his clients.</p><p>Brian also ran his own business, The Green Planet Tour Company, which won a prestigious Financial Post Award in 1997 as the Best Eco-tourism Business in Canada. He’s been a lecturer at McMaster University, and has worked for Environment Canada as well as the Hamilton Conservation Authority and the Bay Area Restoration Council.</p><p>As Councillor, he has chaired, or been a member of, many Committees of the City of Hamilton including the Hamilton Association of Business Improvement Areas (HABIA), Development Charges Stakeholders Sub-Committee, Licensing & Property Standards Operational Review Sub-Committee, and the Provincial Gas Tax Steering Committee. </p><p>He’s also sat on the Boards of many agencies that serve the needs of Hamiltonians. Brian has been honoured to receive a number of awards for his work in the community, including The Dr. Victor Cecilioni Ward as Environmentalist of the Year (1988, 2000), the Architectural Conservancy of Ontarios A.K. Sculthorpe Award for Advocacy (2007) and the Urban Leadership Award/David Crombie Award presented to The Hamilton Roundtable for Poverty Reduction (2009).</p>' }
    ]
  }  
});

Template.all.helpers({
  person: function  (argument) {
    return [
      { 'fullname' : 'Baldasaro, Michael', 'name' : 'Michael', 'email' : 'michaelbaldasaro@me.com', 'bio' : 'bar' },
      { 'fullname' : 'Butt, Ejaz', 'name' : 'Ejaz', 'email' : 'ejazbutt12@hotmail.com', 'bio' : 'bar' },
      { 'fullname' : 'Clancy, Mike', 'name' : 'Mike', 'email' : 'mikeclancy2005@gmail.com', 'bio' : 'bar' },
      { 'fullname' : 'Iamonico, Nick', 'name' : 'Nick', 'email' : 'n/a', 'bio' : 'bar' },
      { 'fullname' : 'Lavigne, Crystal', 'name' : 'Crystal', 'email' : 'crystalx4@hotmail.ca', 'bio' : 'bar' },
      { 'fullname' : 'Ryerson, Phil', 'name' : 'Phil', 'email' : 'philryerson@gmail.com', 'bio' : 'bar' },
      { 'fullname' : 'Tavares, Ricky', 'name' : 'Ricky', 'email' : 'rickyseeds@gmail.com', 'bio' : 'bar' }
    ]
  }  
});

Template.profiles.rendered = function () {
  var splitURL = document.URL.split('#');
  var targetDiv = splitURL[1];

  $('html, body').animate({
      scrollTop: $("#" + targetDiv + "").offset().top
  }, 2000);

};

Template.profiles.rendered = function () {
    // init 
    $('.ui.accordion').accordion();
};