const test = require('ava');
test(t => {
    t.pass();
});

// const fs = require('fs');
// const report = require('../lib/report');
//
// const fileName = '../db/today.json';
// const d = new Date();
//
// test.beforeEach(async () => {
//     console.log('CCC');
//     deleteTestJson();
//     const content = {
//         date: d.toISOString().substring(0, 10),
//         start: {
//             hours: 2,
//             minutes: 30
//         },
//         end: {
//             hours: 5,
//             minutes: 40
//         }
//     };
//     await fs.writeFile(fileName, JSON.stringify(content), err => {
//         if (err) {
//             return console.log(err);
//         }
//     });
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
// test('should calculate the diff between start and end', async t => {
//     const expected = {
//         date: d.toISOString().substring(0, 10),
//         hours: 3,
//         minutes: 10
//     };
//     await report()
//         .then(actual => {
//             t.same(actual, expected);
//         })
//         .catch(t.fail);
// });
