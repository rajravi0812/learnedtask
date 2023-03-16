//Given two number , write a Javascript program that
// resolves a promise if a number is more than 42 else rejects it.

const verifynum = require("./number.js");

async function findnum(num){

    try{
        const result = await verifynum.verify(num);
        console.log(result);
    }catch(err){
        console.log(err);
    }

}
//findnum(67);
findnum(35);
findnum(65);