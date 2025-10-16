//!objective
//todo Create a program using Node,js EventEmitter that:

//? listen for multiple types of user events(login,logout,purchase, and profile update).
//? track how many times each event is emitted.
//? logs a summary of all events ocuurance when a special summary event is triggered

//! Requirements
// create at least fourcustom events(e.g. user-login, user-logout, user-purchase, profile-update).
// Emit these events multiple times with different times with different arguments(e.ge, uisername, item purchaseed).
// Track and store the count of each event type.
// Define a summary event that logs a detailed repoort of how many times each event was triggered.

const EventEmitter = require('events');
const emitter = new EventEmitter();

const eventCounts = {
  'user-login': 0,
  'user-logout': 0,
  'user-purchase': 0,
  'user-logout': 0,
};

emitter.on('user-login', (username) => {
  eventCounts['user-login']++;
  console.log(` ${username} is Logged in!`);
});

emitter.on('user-purchase', (username, item) => {
  eventCounts['user-purchase']++;
  console.log(` ${username} Purchased ${item} `);
});

// OR

emitter.on('user-purchase', (product) => {
  eventCounts['user-purchase']++;
  console.log(` ${product.username} Purchased ${product.item} `);
});

emitter.on('profile-update', (username, feild) => {
  eventCounts['profile-update']++;
  console.log(` ${username} updated his  ${feild} `);
});

emitter.on('user-logout', (username) => {
  eventCounts['user-logout']++;
  console.log(` ${username} logged out`);
});

emitter.on('summary', () => {
  console.log(eventCounts);
});

// emit the events
emitter.emit('user-login', 'Devendra');
emitter.emit('user-logout', 'Devendra');
emitter.emit('user-purchase', { username: 'Devendra', item: 'laptop' });
emitter.emit('profile-update', 'Devendra', 'email');

emitter.emit('summary');
