//merge sort
// function merge(left,right){
//     let sorted = [];
//     while(left.length && right.length){
//         if(left[0]<right[0]){
//             sorted.push(left.shift());
//         }else{
//             sorted.push(right.shift());
//         }
//     }
//     console.log(...sorted,...left,...right);
// }
// let left = [3,4,6];
// let right = [5,9];
// merge(left,right);
//this will work if two given aray is already sorted otherwise wont work


//here we split arr in 1 size.
function mergeSort(arr){
    const half = arr.length/2;

    if (arr.length<=1){
        return arr;
    }

    const left = arr.splice(0,half);
    console.log(left);
    
    const right = arr;
    console.log(right);
    //return merge(mergeSort(left),mergeSort(right));
}

//const arr = [2,5,4,6,7,1,9];
const left = [2,5,4];
const right = [6,7,1,9];
(mergeSort(left),mergeSort(right));
//mergeSort(arr);
// const left = arr.splice(0,3);
// const right = arr;
// console.log(left);
// console.log(right);

