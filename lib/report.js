'use strict';

const fs = require('fs');
const loadJsonFile = require('load-json-file');
const Promise = require('pinkie-promise');
const createFilePath = require('./create-file-path');
const validTimes = require('./valid-times');
const today = require('./todays-date');
const basePath = require('./week-path');

function report(options) {
    if (typeof options.week === 'number') {
        return weekReport(options.week);
    }
    const fileName = typeof options.testFileName === 'string' ?
        options.testFileName :
        createFilePath(today);
    return new Promise(createReport.bind(fileName));
}

function weekReport(weekNumber) {
    const promise = new Promise((resolve, reject) => {
        fs.readdir(basePath(weekNumber), (err, files) => {
            if (err) {
                reject(err);
            }
            const promises = files
                .map(file => {
                    return new Promise(
                        createReport.bind(
                            basePath(weekNumber)
                            .concat('/')
                            .concat(file)
                        )
                    );
                });
            Promise.all(promises)
                .then(results => {
                    const result = results.reduce((result, next) => {
                        return mergeResults(result, next);
                    }, {
                        hours: 0,
                        minutes: 0
                    });
                    resolve(result);
                })
                .catch(reject);
        });
    });
    return promise;
}

function createReport(resolve, reject) {
    const path = this;
    loadJsonFile(path)
        .then(content => {
            if (!validTimes(content.times)) {
                reject('Must end started time.');
                return;
            }
            const result = content.times.reduce((r, time) => {
                const n = createResult(time);
                return mergeResults(r, n);
            }, {
                date: content.date
            });
            resolve(result);
        })
        .catch(reject);
}

function createResult(time) {
    const minutes = (time.end.hours - time.start.hours) * 60;
    const extraMinutes = time.end.minutes - time.start.minutes;
    const totalMinutes = (minutes + extraMinutes);
    const hours = Math.floor(totalMinutes / 60);
    return {
        hours,
        minutes: totalMinutes % 60
    };
}

function mergeResults(r1, r2) {
    if (typeof r1.hours === 'undefined') {
        return Object.assign(r1, r2);
    }
    const newR = {
        hours: r1.hours + r2.hours,
        minutes: r1.minutes + r2.minutes
    };
    if (newR.minutes % 60 !== newR.minutes) {
        newR.hours += Math.floor(newR.minutes / 60);
        newR.minutes %= 60;
    }
    return newR;
}

module.exports = report;
