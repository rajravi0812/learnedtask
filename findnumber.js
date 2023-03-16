function find(value,list){
    let index = -1;
    let found = false;
    while(!found&& index<=list.length){
        if(list[index] === value){
            found = true;
            break;
        }
        else {
            index+=1;
        }
        
    }
    return found;
}
function main(){
    let list = [2,5,9,4,65,24,82];
    let ans= find(66,list);
    console.log(ans);
}
main();