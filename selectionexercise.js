//selection sort
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

function swap(arr,min,start){
    let temp = arr[min];
    arr[min] = arr[start];
    arr[start] = temp;
}
function main(){
    let arr= [33,66,99,88,11];
    console.log(selection(arr));
}
main();