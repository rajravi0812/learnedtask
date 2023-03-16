//FETCH API

// const getapi = fetch('https://api.github.com/users/andrew')

// getapi.then((user) => user.json())
// .then((profile)=>console.log(profile))
// .catch((err)=> console.log(err)); 
// console.log(getapi);

//using asynch and await (ajax)
async function getfromapi(){
    const user = await fetch('https://api.github.com/users/andrew');
    const profile = await user.json();
    console.log(profile);
}
getfromapi();
//so we can use both method to call api with all user one is using fetch with pr omise
//and another one is ajax means using fetch with async and await method 