'use strict';

const tzoffset = (new Date()).getTimezoneOffset() * 60000;
const localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
const short = localISOTime.substring(0, 10);
const div = short.split('-');

exports.hours = localISOTime.substring(11, 13);

exports.minutes = localISOTime.substring(14, 16);

exports.short = short;

exports.raw = {
    year: div[0],
    month: div[1] - 1,
    day: div[2]
};
