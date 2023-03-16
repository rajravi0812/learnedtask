let string = ['rashmi','ravi',56 , 'anuj'];
const arr = interator(string);
console.log(arr.next().value);
console.log(arr.next().value);
console.log(arr.next().value);
console.log(arr.next().value);






function interator(values){
    let nextindex = 0;
    return {
        next: function(){
            if(nextindex< values.length){
                return{
                    value:values[nextindex++],
                    done: false
                }
            }
            else{
                return{
                    done:false
                }
            }
        }
    }
}