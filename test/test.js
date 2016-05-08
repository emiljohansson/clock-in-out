const test = require('ava');
test(t => {
    t.pass();
});

// const fs = require('fs');
// const pathExists = require('path-exists');
// const loadJsonFile = require('load-json-file');
// const clockInOut = require('../');
//
// const fileName = '../db/today.json';
//
// test.beforeEach(async t => {
//     console.log('AAA');
//     deleteTestJson();
//     await clockInOut(fileName)
//         .then(() => {
//             pathExists(fileName)
//                 .then(t.pass)
//                 .catch(t.fail);
//         })
//         .catch(() => {
//             t.fail();
//         });
// });
//
// test.afterEach(deleteTestJson);
//
// function deleteTestJson() {
//     fs.unlink(fileName, () => {
//         // console.log('deleted');
//     });
// }
//
// test('create a valid node module', async t => {
//     await loadJsonFile(fileName).then(json => {
//         const d = new Date();
//         const full = d.toISOString().substring(0, 10);
//         const start = json.start;
//         const hours = d.getHours();
//         const minutes = d.getMinutes();
//         t.is(json.date, full);
//         t.is(typeof start, 'object');
//         t.is(start.hours, hours);
//         t.is(start.minutes, minutes);
//     })
//     .catch(t.fail);
// });
