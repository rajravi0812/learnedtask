class stacks{
    constructor(){
        this.items = [];
    }

    add(element){
        return this.items.push(element);
    }
    remove(){
        if(this.items.length>0){
            return this.items.pop();
        }
    }

    peeks(){
        return this.items[this.items.length-1];
    }

    isEmpty(){
        return this.items.length==0;
    }

    size(){
        return this.items.length;
    }

    clear(){
        this.items = [];
    }
}

let stack = new stacks();

stack.add(1); stack.add(3); stack.add(6); stack.add(4); stack.add(9);
console.log(stack.items);
//stack.remove();
console.log(stack.items);
console.log(stack.peeks());
//console.log(stack.items);
console.log(stack.isEmpty());
console.log(stack.size());  
stack.clear();
console.log(stack.items);