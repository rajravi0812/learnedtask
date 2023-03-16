function main(){
  let a = 3;
  let b = 4;
console.log(gcd(a,b));
}
main();
function gcd(a,b){
  if (b>a){
    [a,b] = [b,a];
  }

  while(b!==0){
    let temp;
    temp = b;
    b = a%b;
    a = temp;
  }
  return a;

}