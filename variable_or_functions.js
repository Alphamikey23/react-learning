var log = function(message) {
    console.log(message);
};


log("In JavaScript, functions are variables");


// Programmers write lot of small functions so arrow functions lets us write the functions in just one line

const log1 = message => console.log(message);

log1("In Javascript, arrow functions are variables too")

// since functions are variables we can add them to objects

const obj = {
    message: "They can be added to objects like variables",
    log(message) {
        console.log(message);
    }
}

obj.log(obj.message);

// we can also add functions to arrays in javascript

const messages = [
    "They can be inserted into arrays",
    message => console.log(message),
    "like variables",
    message => console.log(message)
];

messages[1](messages[0]) // They can be inserted into arrays
messages[3](messages[2]) // live variables

// Functions can be sent to other functions as arguments, just like other variables

const insideFn = logger => {
    logger("They can be sent to other functions as arguments");

};

insideFn(message => console.log(message));


// They can also be returned from other functions, just like variables
const createScream = function(logger) {
    return function(message) {  // what is happening here function is returning function instead of variables or value
        logger(message.toUpperCase() + "!!!");
    };
};

const scream = createScream(message => console.log(message));


scream("functions can be returned from other functions");
scream("createScream returns a function");
scream("scream invokes that returned function");


// higher order functions are those functions which take functions as arguments or return functions as arguments.

const createScream1 = logger => message => {
    logger(message.toUpperCase() + "!!!");
};

// conclusion - functions are first-class citizens. This means that functions are data. They can be saved, retrived or flow through your applications just like variables
