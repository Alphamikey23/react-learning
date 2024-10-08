const template = "hh:mm:ss tt";

const clockTime = template.replace("hh","04").replace("mm","40").replace("ss","44").replace("tt","PM")


console.log(clockTime);

// Higher order functions

const compose =(...fns) => arg => fns.reduce((composed,f) => f(composed),arg);


const both = compose(civilianHours, appendAPPM);

both(new Date());

// Compose function is higher-order function . It takes functions as arguments and returns a single value

