// Array.map and Array.reduce

const schools = ["Yorktown","Washington & Liberty","Wakefield"];

// console.log(schools.join(","))

// //Array.join is a built in javascript array method that we can use to extract a delimited string from our array. The original array is still intact

// const wSchools = schools.filter(school => school[0] === 'W');
// console.log(wSchools);

// //Array.filter is a built in javascript function that produces a new array from a source array. This function takes a predicate as it's only argument. A predicate is a function that always returns a boolean value: true or false.
// // Array.filter invokes this predicate once for every item in the array. That item is passed to the predicate as an argument and the return value is used to decide if that item will be added to the new array.


// const cutSchool = (cut,list) => list.filter(school => school !== cut);

// console.log(cutSchool("Washington & Liberty",schools).join(", "));

// console.log(schools.join("\n"));

// // Instead of precdiate, the Array.map method takes a function as its argument. This function will invoked once for every item the array, and whatever it returns will be added to the new array

// const highSchools = schools.map(school => `${school} High School`);

// console.log(highSchools.join("\n"));

// console.log(schools.join("\n"))

// const highSchools = schools.map(school => ({name: school}));

// console.log(highSchools);

//Reduce 

// const ages = [21,18,42,40,64,63,34];

// const maxAge = ages.reduce((max,age) => {
//     console.log(`${age} > ${max} = ${age > max}`);
//     if (age> max) {
//         return age;
//     }
//     else {
//         return max;
//     }
// },0);

// console.log("maxAge",maxAge);

// sometimes we want to transform an array into object. 

const colors = [{
    id:"xekare",
    title: "rad red",
    rating:3
},
{
    id: "jbwsof",
    title: "big blue",
    rating: 2
},
{
    id:"prigbj",
    title: "grizzly grey",
    rating: 5
},
{
    id:"ryhbhsl",
    title: "banana",
    rating: 1
}];

const hashColors = colors.reduce((hash, {id,title,rating}) => {
    hash[id] = {title,rating};
    return hash;
},{});

console.log(hashColors);