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