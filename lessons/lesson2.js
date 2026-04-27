//Concatenation and Interpolation
var price = 580
var item = "lingerie"
var messageToPrint = "The price for your "+item+" is "+price+" dollars" //concatenation
console.log(messageToPrint)

var messageToPrint = `The price for your ${item} is ${price} dollars.` //interpolation
console.log(messageToPrint)