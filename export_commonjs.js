const print=(message) => log(message,new Date())

const log=(message,timestamp) => console.log(`${timestamp.toString()}: ${message}`)

module.exports = {print, log}



// export can be used to export any javascript type that will be consumed in another module. here print and log function is being exported. we can also use export default

