// create Emmiter object
function Emitter() {
    this.events = {};
}

// use prototype to make functions
Emmitter.prototype.on = function(type, listener) {
    // if property do not exist, add an empty array
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

// look for property, if true -> execute all the pushed functions in the array
Emmitter.prototype.emit = function(type) {
    if(this.events[type]) {
        this.events[type].forEach(element => {
            element();
        });
    }
}

module.exports = Emitter;