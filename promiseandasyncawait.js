const cardverify =require("./promise.js");


async function getcard(){
    console.log('card recieved');
    const card = "7777 8888 9999 4444";
 /* const promise = cardverify.verifys(card);
    console.log(promise);

    //1.using then function
    promise.then(
        //executed when promise is resolved
        (result)=>{
            console.log(result);
            paymentdone();
        },
        //execute when promise rejected
        //can only handle the body of promise
        (err)=>{
            console.log("error block")
            console.log(err);
        }
        //can only handle the body of promise as well as after resolution if there in any error
    ).catch(err=>{
        console.log("error in catch");
        console.log(err);
    });
    */
//2.in using aysnc/await 

try{
    const result = await cardverify.verifys(card);
console.log(result); 
paymentdone();
}catch(err){
    console.log('error block');
    console.log(err);
}



}

function paymentdone(){
    //throw new Error("unhandeled error")
    console.log('amount recieved');
}
getcard();

//1.how to create a promise = new Promise((resolve,reject)=>{//..})
//2.how to listen to a promise = then().catch();
//3. Is there better way to listen = async, await.
//4. how handle error in promise = err, catch block.
//5. how to handle error in async await = try{}catch()