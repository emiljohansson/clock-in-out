const test = require('ava');
const getWeekNumber = require('../lib/week-number');

test('return last week of 2015', t => {
    const expected = [2015, 52];
    const actaul = getWeekNumber(new Date(2016, 0, 3));
    t.same(actaul, expected);
});

test('return first week in 2016', t => {
    const expected = [2016, 1];
    const actaul = getWeekNumber(new Date(2016, 0, 4));
    t.same(actaul, expected);
});

test('return second week in 2016', t => {
    const expected = [2016, 2];
    const actaul = getWeekNumber(new Date(2016, 0, 11));
    t.same(actaul, expected);
});
