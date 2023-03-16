function* generator(){
    yield 10;
    yield 20;
    yield 30;
}
 let cons = generator();
 for(let a of cons){
    console.log(a);
 }
