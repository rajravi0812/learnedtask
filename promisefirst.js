//who promise first according to input number
function main(){
    let num1 = 500;
    let num2 = 100;

    const promise1 = new Promise((resolve,reject)=>{
        setTimeout(resolve,num1,'one');
    });

    const promise2 = new Promise((resolve,reject)=>{
        setTimeout(resolve,num2,'two');
    });

    Promise.race([promise1,promise2]).then(function(value){
        console.log(value);
    });
}
main();