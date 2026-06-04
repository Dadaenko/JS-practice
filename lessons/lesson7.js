// Loops

// for(what-we-want-to-loop; condition-how-long-to-run-loop; what-to-do-after-each-cycle) {

// }

// For loop (for i loop)

for(let i=0; i<5; i=i+1){ // or i++ for the last statement
    console.log('Hello bitches!' + i)
}

// For of loop
var cars = ["Mazuda", "Toyoda", "Kia"]
for(let variable of cars){
    console.log(variable)
    if(variable == "Toyoda") {
        break
    }
}

// ES6 syntax for each loop

cars.forEach(variable => {
     console.log(variable)
});