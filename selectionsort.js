//selection sort
function swap(arr, min, srt){
    let temp = arr[min];
    arr[min] = arr[srt];
    arr[srt] = temp;
}
function selection(arr){
    let i,j,min;
    for(i=0; i<arr.length-1; i++){
        min = i;
        for(j=i+1; j<arr.length; j++){
            if(arr[j]<arr[min]){
                min = j;
                swap(arr,min,i);
            }
        }
    }
    console.log(arr);
}

let arr = [64,25,22,12,11];
selection(arr);