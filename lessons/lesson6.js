// Conditional statement


// If hour is between 6 and 12, print "Good morning!"
// If hour is between 12 and 18, print "Good afternoon!"
//Otherwise, print "Good evening!"

var hour = 13

if(hour >= 6 && hour < 12) {
    console.log('Good morning')
} 
else if(hour >= 12 && hour < 18) {
    console.log('Good afternoon!')
}
else {
    console.log('Good evening')
}