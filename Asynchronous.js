// Synchronous example
//const header = document.getElementById("heading");
//header.innerHTML = "Hey!";

// Simple promise with fectch - Asynchoronous - Stream video or fetching api

//console.log(fetch("https://api.randomuser.me/?nat=US&results=1"))

// fetch is used to fetch the api, promises represents the state of action, weather pending or success, example browser says Hey, I'm going to do some task. 

//fetch("https://api.randomuser.me/?nat=US&results=1").then(res => console.log(res.json()));


fetch("https://api.randomuser.me/?nat=US&results=1").then(res=>res.json()).then(json => json.results).then(console.log).catch(console.error);