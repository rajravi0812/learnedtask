//exercise 
function main(){
    
    let arr = [3,9,8,10,7,1];
    let n= arr.length ;
    let newarr= [];
    let result = bubbleS(arr);
    console.log(result);
    // for(let i=0; i<n; i++){
    //     newarr.push(result.shift());
        
    // }
    // console.log(newarr);
    
}
function bubbleS(arr){
    
    let i,j;
    let isswap = false;
    for(i=0; i<arr.length;i++){
        isswap;
        for(j=0; j<arr.length-i-1; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]=temp;
                isswap= true;
            }
            
        }
        
        if(!isswap){
            break;
        }
        
    }
    
        
    return arr;
}
main();
    

