// const regularExp = new RegExp(/^r..i$/);
// console.log(regularExp.test('ravi'));
//any five letter string starting with r ans i and dot denote no of words between them

// const reg =  /^ab/;
// //console.log(reg.test('bvhi'));
// // or we can use regularexpression 
const reg1 = new RegExp(/^ab/);
console.log(reg1.exec('ab', 'abhi'));