'use strict';

const basePath = require('./week-path')();

function createFilePath(date) {
    const name = date
        .short
        .concat('.json');
    return basePath.concat(name);
}

module.exports = createFilePath;
