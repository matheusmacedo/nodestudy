function Greetr() {
    this.greeting = "hello world 4";
    this.greet = function() {
        console.log(this.greeting);
    }
}

// sending the constructor so that I can create objects
module.exports = Greetr;