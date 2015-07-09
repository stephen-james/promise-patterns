var Promise = require('bluebird');

var stash = function (maps, key) {
    return function (map) {
        maps[key] = map;
        return Promise.resolve({});
    };
};

module.exports = stash;
