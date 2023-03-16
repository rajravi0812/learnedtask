var pokemon={
    first: 'pikka',
    last: 'chuuuu',
    getpokemon:function(){
        var fullname= this.first+' '+this.last;
        return fullname;
    }
};
//this is bind properties
// var pokemonman = function(habbit){
//     console.log(this.getpokemon()+'i love you'+ habbit);
// };
// var newpokemon= pokemonman.bind(pokemon,'cricket');
// newpokemon();

//this is call and apply properties
// var pokemonman = function(snack,hobby){
//     console.log(this.getpokemon()+' like '+snack + ' and '+ hobby);
// }
// var newpokemon = pokemonman.call(pokemon, 'chowmin','cricket');

