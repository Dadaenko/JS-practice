//Objects

var customer = {
    firstName: 'Marie',
    lastName: 'Berry',
    travel: ["France", "Italy", "Spain", "Austria"]
}
//can use either approach to reassign the value:
customer.firstName = 'Billie' //dot notation
customer['lastName'] = 'Eilish' //bracket notation

// console.log(customer.firstName)
// console.log(customer['lastName'])

console.log(`${customer.firstName} ${customer.lastName}`)

//Arrays
var travel = ["France", "Italy", "Spain", "Austria"]
travel[0] = "Hungary"
console.log(travel[0])

console.log(customer.travel[3])