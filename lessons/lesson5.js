//Logical "AND" operator

console.log(true && true) //all values have to be TRUE for experession to  be TRUE -> true

console.log(true && false) // -> false

//Logical "OR"

console.log(true || true) // -> true
console.log(false || false) // -> false

console.log(true || false) //any value should be TRUE for the experession to be TRUE -> true

var ageIsMoreThanEighteen = false
var isUSACitizen = true 

var eligibilityForDriverLicence = ageIsMoreThanEighteen && isUSACitizen
console.log('This customer is eligible for DL: ' + eligibilityForDriverLicence)

var ageIsMoreThanEighteen = false
var isUSACitizen = true 

var eligibilityForDriverLicence = ageIsMoreThanEighteen || isUSACitizen
console.log('This customer is eligible for DL: ' + eligibilityForDriverLicence)

//Logical "NOT" operator

console.log(!true)
console.log(6 == 10)
console.log(6 !== 10)