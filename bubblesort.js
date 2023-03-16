function bubbleSort(arr){
    let sSwap = false;
    for(let i = 0; i<arr.length; i++){
        sSwap;
        for(let j = 0; j<arr.length-i-1;j++){
            if(arr[j]> arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1]= temp;      
                sSwap = true;      }
        }
        if(!sSwap){
            break;
    }
    
    }
    console.log(arr);
}
let arr = [2,4,6,8,9,12,34,56];
bubbleSort(arr);