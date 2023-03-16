// const string = /[\s]/;
// const reg = 'Hello World %^7';
// const result = reg.split(string);
// console.log(result);
//const regex = /(\d{3})\D(\d{3})-(\d{4})/g;
// const re = /\S+@\S+\.\S+{com}\b/g;
// let result  =re.test('rajrai@gmail.com');
// console.log(result)
//Write a JavaScript program to test whether the
// first character of a string is uppercase or not using regular expressions.
// function uppercase(string){
// const reg = /^[A-Z]/;
// const result = reg.test(string);
// console.log(result);
// }

//Write a JavaScript function to check whether a given value is alphanumeric or not.
function isAlphanumeric(str) {
    // Check if the input is a string
    if (typeof str !== 'string') {
      return false;
    }
  
    // Remove all non-alphanumeric characters from the string
    const alphanumeric = str.replace(/[^0-9a-zA-Z]/g, '');
  
    // Check if the resulting string is the same as the original
    return alphanumeric === str;
  }
console.log(isAlphanumeric('ryyfh3453'));  




function main() {
    let str = 'The quick brown fox jumps over the lazy dog';
    console.log(vowel_count(str));
  }
  function vowel_count(str){
   let vowels = 'aeiouAEIOU';
   let count  = 0; 
   for(let i= 1; i<=str.length; i++){
       if(vowels.includes(str[i])){
           count++;
       }
   }
   return count;
  }