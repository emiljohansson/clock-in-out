'use strict';

const fs = require('fs');
const pathExists = require('path-exists');
const loadJsonFile = require('load-json-file');
const Promise = require('pinkie-promise');
const createFilePath = require('./create-file-path');
const createDay = require('./day');
const createTime = require('./time');
const validTimes = require('./valid-times');
const today = require('./todays-date');
const basePath = require('./week-path')();

let fileName = '';
let options = {};

function startDay(optOptions) {
    if (optOptions) {
        options = optOptions;
    }
    fileName = (options && typeof options.testFileName === 'string') ?
        options.testFileName :
        createFilePath(today);
    const promise = new Promise((resolve, reject) => {
        pathExists(basePath).then(exists => {
            if (!exists) {
                fs.mkdirSync(basePath);
            }
            validateTodaysFile(resolve, reject);
        });
    });
    return promise;
}

function validateTodaysFile(resolve, reject) {
    pathExists(fileName).then(exists => {
        if (!exists) {
            createFile(resolve, reject);
            return;
        }
        modifyFile(resolve, reject);
    });
}

function createFile(resolve, reject) {
    const date = Object.assign(today, options);
    const content = createDay(date);
    fs.writeFile(fileName, JSON.stringify(content), err => {
        if (err) {
            reject(err);
            return;
        }
        resolve('The file was saved!');
    });
}

function modifyFile(resolve, reject) {
    const date = Object.assign(today, options);
    loadJsonFile(fileName)
        .then(content => {
            if (!validTimes(content.times)) {
                reject('Must end started time.');
                return;
            }
            content.times.push(createTime(date));
            fs.writeFile(fileName, JSON.stringify(content), err => {
                if (err) {
                    return console.log(err);
                }
                resolve('The file was saved!');
            });
        })
        .catch(reject);
}

module.exports = startDay;
