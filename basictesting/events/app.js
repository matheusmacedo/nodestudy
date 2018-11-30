var Emitter = require('events');
var eventConfig = require('./config').events;
var emtr = new Emitter();

// push functions with on
emtr.on(eventConfig.GREET, function() {
    console.log("Greeting done!");
});

// dont rely on magic strings
emtr.on(eventConfig.GREET, function() {
    console.log("Someone greeted..");
});

// react to event using emmit
console.log('hi!');
emtr.emit(eventConfig.GREET);

var person = require('./person');
var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john.greet());

// emmiter using class and extends
// use class to create new one and extends for inheritance (like java)
class MyStream extends Emitter {
    write(data) {
        this.emit('data', data);
    }
}

// create new object that gets the Emitter functions and the write function
const stream = new  MyStream();
stream.on('data', (data) => {
    console.log(`received data: ${data}`)
});
stream.write('With EJS6');