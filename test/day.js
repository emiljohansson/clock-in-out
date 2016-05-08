const test = require('ava');
const createDay = require('../lib/day');

test('create an object with date and times', t => {
    const time = {
        hours: 5,
        minutes: 42
    };
    const expected = {
        date: 'abc',
        times: [{
            start: time
        }]
    };
    const actual = createDay({
        short: 'abc',
        hours: 5,
        minutes: 42
    });
    t.same(actual, expected);
});
