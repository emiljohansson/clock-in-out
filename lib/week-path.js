'use strict';

const today = require('./todays-date');
const weekNumber = require('./week-number')(new Date(today.raw.year, today.raw.month, today.raw.day))[1];

module.exports = function getWeekPath(number) {
    number = typeof number === 'number' ? number : weekNumber;
    return __dirname
        .concat('/')
        .concat('../db/')
        .concat(number)
        .concat('/');
};
