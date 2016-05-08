'use strict';

function validTimes(times) {
    return !times.filter(time => {
        return !time.end;
    }).length > 0;
}

module.exports = validTimes;
