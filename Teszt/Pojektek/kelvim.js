const kelvin = 293;
//The forecast today is 293 Kelvin.//
const celsius = kelvin - 273;
//Celsiu is kelvin - 273//
let fahrenheit = celsius * (9 / 5) + 32;
//fahrenheit = celsius * (9 / 5) + 32;
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// Convert to Newton
let newton = celsius * (33 / 100);

// Round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);
console.log(`The temperature is ${celsius} degrees Celsius.`);