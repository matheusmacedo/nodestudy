// revealing module pattern
var greeting = 'hello world 5';
function greet() {
    console.log(greeting);
}

// this way only the function is exposed, not the greeting variable
module.exports = {
    greet: greet
}