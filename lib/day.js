'use strict';

const createTime = require('./time');

function createDay(date) {
    return {
        date: date.short,
        times: [createTime(date)]
    };
}

module.exports = createDay;
