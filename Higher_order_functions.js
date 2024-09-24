// Higher order functions are functions that can manipulate other functions. They can take functions as arguments or return functions or both

// Array.map, Array.filter and Array.reduce all that functions as arguments

// const invokeIf = (condition,fnTrue,fnFalse) => condition? fnTrue(): fnFalse();

// const showWelcome= () => console.log("Welcome!!!");

// const showUnauthorized = () => console.log("Unautorized!!!");

// invokeIf(true,showWelcome,ShowUnauthorized);

// invokeIf(false,showWelcome,showUnauthorized);

//currying

const getFakeMembers = count => 
    new Promise((resolves,rejects) => {
        const api = `https://api.randomuser.me/?nat=US&results=$(count)`;
        const request = new XMLHttpRequest();
        request.open("GET",api);
        request.onload =() =>
            request.status === 200 
        ? resolves(JSON.parse(request.response).results)
        : rejects(Error(request.statusText))
        request.onerror = err => rejects(err);
        request.send();
    });


    getFakeMembers(4)
    .then(members => console.log(members))
    .catch(error =>console.error(`getPeople failed: ${error.message}`));

const userLogs = userName => message => console.log(`${userName} -> ${message}`);

const log=userLogs("grandpa23");

log("attempted to load 20 fake members");
getFakeMembers(20).then(
    members => log(`successfully loaded ${members.length} members`),
    error => log("encountered an error loading members")

);

