var msg = 'Good morning '
console.log(msg); 

var peg = require("pegjs");
const fs = require("fs");

grammerFile = 'grammer.pegjs'

grammer = fs.readFileSync(grammerFile,'utf8')
console.log(grammer); 

var parser = peg.generate(grammer)

var input1 = '438018480'
var output1 = parser.parse(input1)
console.log(output1);