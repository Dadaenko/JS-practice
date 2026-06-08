// Declarative Functions - can be called before the function is declared, works fine 

function helloOne(){
    console.log('Hello One!')
}

helloOne()

// Anonymous function - can not be called before being declared

var helloTwo = function(){
     console.log('Hello Twooo!')

}
helloTwo()

//ES6 function syntax or arrow function

var helloThree = () => {
     console.log('Hello Threeeee!')

}
helloThree()

//Functions with arguments 

function printName(name, lastName){
    console.log(name + ' ' + lastName)
}

printName('Johanne')
printName('Sharon', 'Stone')

//Function with return

function multiplyByTwo(number){
    var result = number * 2
    return result
}

var myResult = multiplyByTwo(4)
console.log(myResult)

//import function
import {printAge} from '../helpers/printHelper.js'
printAge(5)

//import everything

import * as helper from '../helpers/printHelper.js'
helper.printAge(10)