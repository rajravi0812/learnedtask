// const string = /[\s]/;
// const reg = 'Hello World %^7';
// const result = reg.split(string);
// console.log(result);
// const regex = /(\d{3})\D(\d{3})-(\d{4})/g;
// const number = regex.exec('My Phone number is : 555 333-6654');
// console.log(number);

// const string  = 'hello Hello hello hello ';
// const result= string.replace(/hello/g, 'brother'); ///here  g is for global if we dont use g then it replace only first matcch hello other wise replace all hello which present in string.
// console.log(result);
// const result1 = string.replace(/hello/i, 'brother'); //here i replace case sensitive replace like Hello or first place.
// console.log(result1);

// function validatenum(number){
//     const re = /^\(?([0-9]{2})\)?([^0-9]{1})?([0-9]{5})?([^0-9]{1})?([0-9]{5})$/g;
//     //const re = /^\(?([0-9]{2})\)?[-.]?([0-9]{5})[-.]?([0-9]{5})$/g;

//     let result = number.match(re);
//     if(result){
//         console.log('The number is valid');
//     }
//     else{
//         let number = prompt('The number is not in correct format');
//         validatenum(number);
//     }
// }
// let num = prompt('enter number is xx-xxxxx-xxxxx');
// validatenum(num);

function validmail(mail){
const re = /\S+@\S+\.\S+/g;
let result  =re.test(mail);

if (result){
    console.log('the email is valid');

}
else{
    let newEmail = prompt('enter a email in correct format');
    validmail(newEmail);
}
}
let mail = prompt('Enter a mail');
validmail(mail);


// const count = 'The quick brown fox jumps over the Lazy dog';
// const reg = /[aeiou]/g;
// const result= count.match(reg).length;
// console.log(result);



// const hex = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i; //here i means starts with first
// const str = "#444665";
// const result = hex.test(str);
// console.log(result);





