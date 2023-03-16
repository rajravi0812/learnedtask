module.exports.verifys= (card)=>{
//create a promise
const promise = new Promise((resolve,reject)=>{
    if(!card){
        reject("card is empty");
    }
    setTimeout(()=>{
        //verify the card after 4 second
        resolve(true);
    },4000)
});
return promise;
}