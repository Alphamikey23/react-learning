// Pure function is a function that returns a value that's computed based on its arguments
// It takes atleast one argument and always return a value or another function.
// They do not cause side effects, set global variables, or change anything about application state.

// Let's take impure function as example

// const frederick = {
//     name: "Frederick Douglass",
//     canRead : false,
//     canWrite : false
// };

// function selfEducate() {
//     frederick.canRead = true;
//     frederick.canWrite = true;
//     return frederick;
// }

// selfEducate();

// console.log(frederick);

// This is not a pure function as it does not take any arguments and does not return a value or function. It also changes a variable outside of its scope Frederick. 

// const frederick = {
//     name: "Frederick Douglass",
//     canRead : false,
//     canWrite : false
// };

// const selfEducate = person => {
//     person.canRead = true;
//     person.canWrite = true;
//     return person;
// };

// console.log(selfEducate(frederick));
// console.log(frederick);

// Let's have this function take an argument:

const frederick = {
    name: "Frederick Douglass",
    canRead: false,
    canWrite: false
};

const selfEducate = person => ({
    ...person,
    canRead : true,
    canWrite : true
});

console.log(selfEducate(frederick));
console.log(frederick);
