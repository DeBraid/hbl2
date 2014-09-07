Template.qanda.helpers({
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

Template.qanda.rendered = function () {

    var splitURL = document.URL.split('#');
    var targetDiv = splitURL[1];
    console.log(targetDiv);

    $('html, body').animate({
        scrollTop: $("#" + targetDiv + "").offset().top
    }, 1000);
};
