const index = require('./information.js');
const cowsay = require('cowsay');

console.log(cowsay.say({
    text : `I'm ${index.name} from ${index.campus}`,
    e : "oO",
    T : "U "
}));