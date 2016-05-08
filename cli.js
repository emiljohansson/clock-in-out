#! /usr/bin/env node

const argv = require('minimist')(process.argv.slice(2));
const clockInOut = require('./');
const endDay = require('./lib/end-day');
const report = require('./lib/report');

var options = {};

function isNumber(arg) {
    var value = parseInt(arg, 10);
    return typeof value === 'number' && !isNaN(value);
}

function setTime(time) {
    time = String(time);
    options.hours = time.slice(0, time.length - 2);
    options.minutes = time.slice(time.length - 2);
}

function onlyNumbers(string) {
    return /^\d+$/.test(string);
}

if (argv['week']) {
    options.week = argv['week'];
}
if (argv['time']) {
    setTime(argv['time']);
}

argv._.forEach(function(arg) {
    if (onlyNumbers(arg)) {
        setTime(arg);
    }
});

if (argv._.indexOf('report') > -1) {
    report(options)
        .then(result => {
            console.log(''
                .concat(result.hours)
                .concat(' hours ')
                .concat(result.minutes)
                .concat(' minutes')
            );
        })
        .catch(e => {
            console.log(e);
        });
    return;
}
if (argv._.indexOf('end') > -1) {
    endDay(options)
        .then(() => {
            console.log('The day has ended.');
        })
        .catch(e => {
            console.log(e);
        });
    return;
}

clockInOut(options)
    .then(() => {
        console.log('The day has started.');
    })
    .catch(e => {
        console.log(e);
    });
