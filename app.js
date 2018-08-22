// Change this constant (measured in Kelvin) to calculate your other temperatures
const kelvin = 0

// Converts forecast to celcius
var celcius = kelvin - 273

// Converts to Newton
var newton = celcius * (33/100)

// Rounds down to whole number
newton = Math.floor(newton)

// Converts to farenheit
var farenheit = celcius * (9/5) + 32

// Rounds down to whole number
farenheit = Math.floor(farenheit)



console.log(`The temperature is ${farenheit} degrees Farenheit.`)

console.log(`The temperature is ${celcius} degrees Celcius.`)

console.log(`The temperature is ${newton} on the Newton scale.`)