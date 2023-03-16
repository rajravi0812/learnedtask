module.exports.verify=(num)=>{
    const promise= new Promise((resolve,reject)=>{
        if(num<45){
            reject(num+" "+"is rejected");
        }
        
            resolve(num+" "+"is resolved");
        
            
    })
     return promise;
    }