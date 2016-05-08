'use strict';

const startDay = require('./lib/start-day');

function clockInOut(testFileName) {
    return startDay(testFileName);
}

module.exports = clockInOut;
