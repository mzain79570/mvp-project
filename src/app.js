// Main application logic

const { greet } = require('./index');

function initialize() {
  console.log('Initializing application...');
  console.log(greet('World'));
}

module.exports = {
  initialize
};