function main(){
    let str = 'I am almabetter';
    str.split(" ")
    let start= 0;
    for(let end=0; end<=str.length; end++){
        if(str[end]==' '){
            reverse(str, start, end)
            start = end+1;
        }
    }
    reverse(str,start, s.length-1);
    reverse(str, 0, s.length-1)
    console.log(str.join(""));
}

main();

function rev(str, start, end){
    let temp;
    while (start<=end){
    temp = str[start];
    str[start]= str[end];
    str[end]= temp;
    start++;
    end--;
}
    
}







// let a = rev(str);
// console.log(a);
 
// function rev(string){
//     return string.split(" ").reverse().join(' ');
// }