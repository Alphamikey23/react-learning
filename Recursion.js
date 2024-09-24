// A function which calls itself is called recursion function

// const countdown = (value,fn) => {
//     fn(value);
//     return value>0? countdown(value-1,fn): value;
// };


// countdown(10, value => console.log(value));


// countdown function can be modified to count down with a delay. This modified version of the countdown function can be used to create a countdown clock

// const countdown = (value, fn , delay=1000) => {
//     fn(value);
//     return value> 0 ? setTimeout(() => countdown(value-1,fn,delay),delay):value;
// };


// const log = value => console.log(value);
// countdown(10,log);


//Recursion can be used to html dom until you find an element that does not contain any children.

const dan = {
    type: "person",
    data :{
        gender: "male",
        info: {
            id: 22,
            fullname: {
                first: "Dan",
                last: "Deacon",
            }
        }
    }
};




const deepPick = (fields, object = {} ) => {
    const [first, ...remaining] = fields.split(".");
    return remaining.length ?
    deepPick(remaining.join("."),object[first]) : object[first];
};


console.log(deepPick("type",dan)); // person

console.log(deepPick("data.info.fullname.first",dan)); //Dan
