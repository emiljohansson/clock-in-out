const test = require('ava');

test(t => {
    t.pass();
});

// const fs = require('fs');
// const pathExists = require('path-exists');
// const loadJsonFile = require('load-json-file');
// const clockInOut = require('../');
// const endDate = require('../lib/end-day');
//
// const fileName = '../db/today.json';
//
// test.beforeEach(async t => {
//     console.log('BBB');
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
// test('add end object to today.json', async t => {
//     await endDate()
//         .then(async() => {
//             await loadJsonFile(fileName)
//                 .then(json => {
//                     console.log(json);
//                     const d = new Date();
//                     const full = d.toISOString().substring(0, 10);
//                     const end = json.end;
//                     const hours = d.getHours();
//                     const minutes = d.getMinutes();
//                     t.is(json.date, full);
//                     t.is(typeof end, 'object');
//                     t.is(end.hours, hours);
//                     t.is(end.minutes, minutes);
//                 })
//                 .catch(t.fail);
//         })
//         .catch(t.fail);
// });
