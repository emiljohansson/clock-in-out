const test = require('ava');
const validTimes = require('../lib/valid-times');

test('be valid', t => {
    t.true(validTimes([{
        end: true
    }]));
    t.true(validTimes([{
        end: true
    }, {
        end: 123
    }, {
        end: {}
    }]));
});

test('be invalid', t => {
    t.false(validTimes([{}]));
    t.false(validTimes([{end: true}, {}, {end: true}]));
});
