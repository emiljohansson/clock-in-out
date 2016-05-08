const test = require('ava');
const createTime = require('../lib/time');

test('use argument hours and minutes to create a start time', t => {
    const time = {
        hours: 5,
        minutes: 42
    };
    const expected = {
        start: time
    };
    const actual = createTime(time);
    t.same(actual, expected);
});
