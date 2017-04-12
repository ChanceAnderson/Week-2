'use strict';

console.log('Greenlight');

var pike = {
  openAt: 6,
  closeAt: 20,
  minHourlyCust: 23,
  maxHourlyCust: 65,
  avgCookiesCustom: 6.3,
  data: [],

};

var seaTac = {
  openAt: 6,
  closeAt: 20,
  minHourlyCust: 3,
  maxHourlyCust: 24,
  avgCookiesCustom: 1.2,

};
var seaCenter = {
  openAt: 6,
  closeAt: 20,
  minHourlyCust: 11,
  maxHourlyCust: 38,
  avgCookiesCustom: 3.7,
};
var capitolHill = {
  openAt: 6,
  closeAt: 20,
  minHourlyCust: 20,
  maxHourlyCust: 38,
  avgCookiesCustom: 2.3,
};
var alki = {
  openAt: 6,
  closeAt: 20,
  minHourlyCust: 2,
  maxHourlyCust: 16,
  avgCookiesCustom: 4.6,
};


//Cookies for every hour thru closing
var cookieHourly = function(place){

  //creates random number of customers
  var randomNumCust = function(place){
    return Math.floor(Math.random() * (place.maxHourlyCust - place.minHourlyCust + 1)) + place.minHourlyCust;
  };

  //create simulated number of cookies per hour
  var simCookieHr = place.avgCookiesCustom * randomNumCust(place);

  for(var i = 6; i <= 20; i++){
    console.log(i + ' am: ' + simCookieHr + ' cookies');

  };
};

console.log(cookieHourly(alki));
