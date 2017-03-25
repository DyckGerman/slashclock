var Clock = require('./index.js').slashClock;

var clock = new Clock();
clock.startClock();

setTimeout(() => {
    clock.resetClock();
}, 5000);

setTimeout(() => {
    clock.stopClock();
}, 8000);
