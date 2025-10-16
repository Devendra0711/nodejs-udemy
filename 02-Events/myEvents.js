const EventEmitter = require("events")
// we have to create a instance of our events:-
const eventEmitter = new EventEmitter()
// everytime if u make the instance then you should put 'new' 

// Emit (trigger) events.
// Listen (respond) to events.

eventEmitter.on('greet', (user) => {
    console.log(`Hello ${user} and Welcome`);
})

//? The .on() method registers an event listener.
//? It tells Node.js:
//? “When the event 'greet' happens, run this callback function.”


// Events that happens only and only once:-
eventEmitter.once('pushNotification', () => {
    console.log("This Events will run only once");
})

//Emit the event
eventEmitter.emit("greet", "Devendra");
// here we put "Devendra" it will automaticlly go into the callback and return us.
//Output:- "Hello Devendra and Welcome"

eventEmitter.emit("pushNotification");
eventEmitter.emit("greet", "Devendra Jha");

// Output:-
// Hello Devendra and Welcome
// This Events will run only once
// Hello Devendra Jha and Welcome


//? In general programming we can make a constatnt file and put all those events there and use from there.


// .emit(eventName, [args]) ==> function call. -> jab koi is particular event ko emit kar rha hai
// .on(eventName, listner) ==> function define ->to us event ko sunna hai

//? ex:- const EventEmitter = require('events');

// jab bhi koi instance create karna hoga to usko 'new' keyword k saath hi hmesa create karenge.
// ex:- const emitter = new EventEmitter();

//? Define an event listner (on, addListner)
// emitter.on("eventName", show kya karna hai agar ye greet event call hua to)
emitter.on('greet', () => {
  console.log('Hello Devendra Jha');
});

// Trigger (emit) the event
emitter.emit('greet');

//* you can also pass arguments while emitting

emitter.on('greet', (name) => {
  console.log(`Hello ${name}`);
});
emitter.emit('greet', 'Devendra Jha');

emitter.on('greet', (name, prof) => {
  console.log(`Hello ${name} You are a ${prof}`);
});
emitter.emit('greet', 'Devendra Jha', 'FullStack Developer');

//! but its best idea to take a single argument as an object
emitter.on('greet', (PersonalInfo) => {
  console.log(`Hello ${PersonalInfo.name} You are a ${PersonalInfo.prof}`);
});
emitter.emit('greet', {
  name: 'Devendra Jha',
  prof: 'FullStack Developer',
});

