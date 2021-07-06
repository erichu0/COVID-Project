// var caseNumber = '1,375,000'

// document.querySelector('#caseCount').innerHTML = "COVID-19 Cases Worldwide: " + caseNumber;

var date = new Date();
var midnight = new Date(date.getFullYear(), date.getMonth(), date.getDate());

//console.log(date.getFullYear(), date.getMonth()+1, date.getDate())

console.log(midnight, date);

console.log(midnight.getSeconds());
console.log(date.getSeconds());

console.log((date - midnight) / 1000);