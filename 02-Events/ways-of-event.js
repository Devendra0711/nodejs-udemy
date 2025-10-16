// 1. Normal Way (Using EventEmitter Directly)
const EventEmitter = require('events'); // Step 1
const eventEmitter = new EventEmitter(); // Step 2

eventEmitter.on('greet', (name) => {
  // Step 3
  console.log(`Hello, ${name}!`);
});

eventEmitter.emit('greet', 'Alice'); // Step 4

// Step-by-Step Explanation:
// 1. Import the events module: The events module provides the EventEmitter class, which is the foundation for event-driven programming in Node.js.

// 2. Create an instance of EventEmitter: This instance (eventEmitter) will be used to register listeners and emit events.

// 3. Register an event listener: The on method is used to listen for the greet event. When the greet event is emitted, the callback function is executed, receiving the event data (name).

// 4. Emit the event: The emit method triggers the greet event and passes the argument 'Alice' to the listener. The listener logs Hello, Alice! to the console.

// 2. Using a Class
const EventEmitter = require('events'); // Step 1

class MyEmitter extends EventEmitter {
  // Step 2
  greet(name) {
    // Step 3
    console.log(`Hello, ${name}!`);
    this.emit('greeted', name); // Step 4
  }
}

const myEmitter = new MyEmitter(); // Step 5

myEmitter.on('greeted', (name) => {
  // Step 6
  console.log(`${name} has been greeted.`);
});

myEmitter.greet('Bob'); // Step 7

// Step-by-Step Explanation:
// 1. Import the events module: Same as before, we need the EventEmitter class.

// 2. Extend the EventEmitter class: A custom class MyEmitter is created by extending EventEmitter. This allows us to define custom methods and emit events within the class.

// 3. Define a method (greet): The greet method logs a message and emits the greeted event, passing the name as data.

// 4. Emit the event: Inside the greet method, the emit method triggers the greeted event.

// 5. Create an instance of the custom class: An object of MyEmitter is created to use the custom functionality.

// 6. Register an event listener: The on method listens for the greeted event and logs a message when the event is triggered.

// 7. Call the greet method: This triggers the greeted event, and the listener logs Bob has been greeted. to the console.

// 3. Handling Errors with Events

const EventEmitter = require('events'); // Step 1
const eventEmitter = new EventEmitter(); // Step 2

eventEmitter.on('error', (err) => {
  // Step 3
  console.error(`An error occurred: ${err.message}`);
});

eventEmitter.emit('error', new Error('Something went wrong!')); // Step 4

// Step-by-Step Explanation:
// 1. Import the events module: Same as before, we need the EventEmitter class.

// 2. Create an instance of EventEmitter: This instance (eventEmitter) will be used to handle events, including errors.

// 3. Register an error listener: The on method listens for the special error event. If an error is emitted, the callback function logs the error message.

// 4. Emit an error event: The emit method triggers the error event, passing an Error object. The listener logs An error occurred: Something went wrong! to the console.

//! Key Concepts:
//! Event Listeners: Functions registered to respond to specific events.
//! Event Emission: Triggering an event using the emit method.
//! Error Handling: The error event is a special event in Node.js. If no listener is registered for it, the program will crash.