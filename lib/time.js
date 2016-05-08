'use strict';

function createTime(date) {
    return {
        start: {
            hours: date.hours,
            minutes: date.minutes
        }
    };
}

module.exports = createTime;
