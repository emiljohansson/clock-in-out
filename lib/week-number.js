'use strict';

// http://stackoverflow.com/a/6117889/111592
function getWeekNumber(d) {
    d = new Date(Number(d));
    d.setHours(0, 0, 0);
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    const yearStart = new Date(d.getFullYear(), 0, 1);
    const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return [d.getFullYear(), weekNo];
}

module.exports = getWeekNumber;
