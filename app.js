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
  var simCookieHr = function(){
    place.avgCookiesCustom * randomNumCust(place);
  };


//create a random number of total cookies for each hour
  for(var i = 6; i <= 20; i++){
    var cookies = simCookieHr() + simCookieHr();
    console.log(i + ' am: ' + simCookieHr() + ' cookies');
    cookies;
  };
};

var domPlace = function(place){
  console.log(cookieHourly(place));
  var div = document.createElement('div');
  var ul = document.createElement('ul');
  var li = document.createElement('li');
