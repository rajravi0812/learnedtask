
//Given an array arr of size n . Write code to convert into Linkedlist 
//and then reverse the linked list. We need to reverse the list by changing the links between nodes.
//Input:
//4
//[85 15 4 20 ]
//20.4.15.85 

class Node{
    constructor(data){
        this.data= data;
        this.next = null;
    }
}

function printlist(head){
    let current  = head;
    let s ="";
    while(current!==null){
        s+=current+".";
        current=current.next;
    }
    console.log(s);
}
function reverse(node){
    let prev= null;
    let current = node;
    let next = null;
    while(current!==null){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    node = prev;
    return node;
}

function main(){
    let arr= [85,15,4,20];
    let n = arr.length;
    let head = new Node(arr[0]);
    let tail = head;
    for (let i = 1; i<n; i++){
        tail.next=new Node(arr[i]);
        tail = tail.next;
    }
    head = reverse(head);
    printlist(head);
}
main();
