// Let's make a url user-friendly by replacing spaces with - Imperrative programming focus on how to achieve results

const string = "Restaurants in Hanalei";
var urlFriendly = "";

for (var i=0;i<string.length;i++) {
    if(string[i] == " ") {
        urlFriendly += "-";

    }
    else {
        urlFriendly +=string[i];
    }
}

console.log(urlFriendly);

// Now let's look at a declarative approach to the same problem

const string1 = "You can convert any string to url";
var urlFriendly1 = string1.replace(/ /g,"-");

console.log(urlFriendly1);

// Here we are using string.replace along with a regular expression to replace instances of spaces with hyphens. 


// Now let's build DOM with imperative approach


//creating elements
// const target = document.getElementById("target");
// const wrapper = document.createElement("div");
// const headline = doucment.createElement("h1");

// //setting elements
// wrapper.id = "Welcome";
// headline.innerText = "Hello world";

// //adding them to the document

// wrapper.appendChild(headline);
// target.appendChild(wrapper);


// Now it's hard to create like this for 1000 lines or to scale so we use declarative using react

// const {render } = ReactDOM;

// const Welcome = () => (<div id="welcome"><h1>Hello World</h1></div>);


// render(<Welcome />, document.getElementById("target"));

// Let's move to functional concepts

// 1. Immutability - birth certificate example 
// To understand Immtability let's consider and object that represents color lawn:


let color_lawn = {
    title : "lawn",
    color: "#00FF00",
    rating: 0
};

// function rateColor(color,rating) {
//     color.rating = rating;
//     return color;
// }

// console.log(rateColor(color_lawn,5).rating);
// console.log(color_lawn.rating)

const rateColor = function(color,rating) {
    return Object.assign({},color,{rating:rating});
};

console.log(rateColor(color_lawn,5).rating);
console.log(color_lawn.rating);


const rateColor1 = (color, rating) => ({
    ...color,
    rating
});

console.log(rateColor1());
// Let's consider an array of color names
let list = [{title: "Rad Red"},{title: "Lawn"},{title: "Party Pink"}];

const addColor = function(title,colors) {
    colors.push({title:title});
    return colors;
};

console.log(addColor("Galm Green",list).length);
console.log(list.length);


