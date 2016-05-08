'use strict';

const fs = require('fs');
const loadJsonFile = require('load-json-file');
const Promise = require('pinkie-promise');
const createFilePath = require('./create-file-path');
const today = require('./todays-date');

let fileName = '';
let options = {};

function endDate(optOptions) {
    if (optOptions) {
        options = optOptions;
    }
    fileName = (options && typeof options.testFileName === 'string') ?
        options.testFileName :
        createFilePath(today);
    return new Promise(update);
}

function update(resolve, reject) {
    const date = Object.assign(today, options);
    loadJsonFile(fileName)
        .then(content => {
            const time = content.times[content.times.length - 1];
            time.end = {
                hours: date.hours,
                minutes: date.minutes
            };
            fs.writeFile(fileName, JSON.stringify(content), err => {
                if (err) {
                    return console.log(err);
                }
                resolve('The file was saved!');
            });
        })
        .catch(reject);
}

module.exports = endDate;
