// Today's forecast
const kelvin = 293

// Converts forecast to celcius
var celcius = kelvin - 273

// Converts to farenheit
var farenheit = celcius * (9/5) + 32

// Rounds down to whole number
farenheit = Math.floor(farenheit)


console.log(`The temperature is ${farenheit} degrees Farenheit.`)