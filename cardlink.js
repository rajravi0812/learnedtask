module.exports.verify=(card, cb)=>{
    //verification
    //call banks
    //i/o
    console.log('card verify');
    for(let i =0; i<=10; i++){//this will drawback of callback because third party can mislead the multiple transections
    cb(); 
    }
}