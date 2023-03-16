function sort(stack){
    let temp = [];
    while(stack.length>0){
        let current = stack.pop();
        //console.log(current);
        while(temp.length>0 && temp[temp.length-1] < current){
            stack.push(temp.pop());
        }
        let x = temp.push(current);
       // console.log(x);

    }
    while (temp.length>0){
        let b = stack.push(temp.pop());
        //console.log(b);
    }
    return stack;
} 

let stack = [98, 88, 3, 69, 55];
let a =sort(stack);
//console.log(a);