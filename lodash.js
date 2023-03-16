let _ = require('lodash');
let numbers = [1,2,3,4];
let listOfNumbers = '';
_.each(numbers,function(x) {listOfNumbers +=x+''});
console.log(listOfNumbers);


// let numbers = [1,2,3,4];
// //let listOfNumbers = '';
// _.each(numbers,listOfNumbers=> {
//     console.log(listOfNumbers);
// });
//these two method have two differrent result like first one have 1234 in horizontally and second one have result is veritally