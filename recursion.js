function fact(num){
    if(num===0){
        return 1;
    }
    else{
        let result = num*fact(num-1);
        return result;
    }
}
console.log(fact(8));