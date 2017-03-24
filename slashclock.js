exports.slashClock = function () {
    var notRealTime = 0;
    var slashes = '';
    var intervalHandler = null;

    this.resetClock = () => {
        process.stdout.write('\r                                                                              ');
        seconds = 0;
        slashes = '';
    }

    this.startClock = () => {
        intervalHandler = setInterval (() => {
            process.stdout.write('\r' + notRealTime + 'ms  ' + slashes);
            slashes = slashes + '|';
            notRealTime += 100;
        }, 100);
    }

    this.stopClock = () => {
        clearInterval(intervalHandler);
    }
}
