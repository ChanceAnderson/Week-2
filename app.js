'use strict';

console.log('Greenlight');

var seaTacEstimate = Math.floor(Math.random() * 24) + 3;
var seaCenterEstimate = Math.floor(Math.random() * 38) + 11;
var capitolHillEstimate = Math.floor(Math.random() * 38) + 20;
var alkiEstimate = Math.floor(Math.random() * 16) + 2;

var pike = {
  minHourlyCust: 23,
  maxHourlyCust: 65,
  avgCookiesCustom: 6.3,
  data: [],
};

for(var i; i <= 12; i++){
    var pikeEstimate = Math.floor(Math.random() * 65) + 23;
    console.log(i + ' am: ' + pikeEstimate + ' cookies');
    pike.data.push(pikeEstimate);
  };



var seaTac = {
  minHourlyCust: 3,
  maxHourlyCust: 24,
  avgCookiesCustom: 1.2,
};
var seaCenter = {
  minHourlyCust: 11,
  maxHourlyCust: 38,
  avgCookiesCustom: 3.7,
};
var capitolHill = {
  minHourlyCust: 20,
  maxHourlyCust: 38,
  avgCookiesCustom: 2.3,
};
var alki = {
  minHourlyCust: 2,
  maxHourlyCust: 16,
  avgCookiesCustom: 4.6,
};
