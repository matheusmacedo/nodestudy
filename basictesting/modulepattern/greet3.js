// replace with other object
function Greetr() {
    this.greeting = "hello world 3";
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = new Greetr();