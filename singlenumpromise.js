

async function findnum(num){

    try{
        const promise= await new Promise((resolve,reject)=>{
                if(num<45){
                    reject(num+" "+"is rejected");
                }
                else{
                    resolve(num+" "+"is resolved");
                }
                
                    
            })
             return promise;
        
    }catch(err){
        console.log(err);
        console.log('there is an error')
    }

}
findnum(65);