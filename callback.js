// function homework(){
//     setTimeout(()=>{
//         console.log('homework done')  //task 1
//     },5000);
// }

// function submitted(){
//     console.log('submitted');   //task 2
// }
// homework();
// submitted();
//this is the function without callback so task 2 done before and task 1 done after because main thread send event queue to event loop to node js and then again in queue 
//now we use callback 

function homework(cb){
    setTimeout(()=>{
        console.log('homework done');
        cb()
    },5000);
}
 function submitted(){
    console.log('submitted');
 }
  homework(submitted);
//this will work with callback function 


