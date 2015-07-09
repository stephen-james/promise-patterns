var _ = require('underscore');
var Promise = require('bluebird');
var chunkArray = require('./chunkArray');

var chunk =  function chunk(items, process, context, options) {
    var DEFAULT_OPTIONS = {
        chunkSize: 10,
        interval: 1,
        cancel: false,
        resultLimit: null
    };

    options = _.extend({}, DEFAULT_OPTIONS, options);

    var itemsToProcess = chunkArray(items, options.chunkSize);
    var deferred = Promise.pending();
    var chunkIndex = 0;
    var output = [];

    var processNextChunk = function() {
        Promise.resolve(process.call(context, itemsToProcess.shift(), chunkIndex++))
            .then(function(results) {
                output = output.concat(results);

                if (itemsToProcess.length && (!options.resultLimit || output.length < options.resultLimit) && !options.cancel) {
                    setTimeout(processNextChunk, options.interval);
                } else {
                    deferred.resolve(output);
                }
            });
    };

    setTimeout(processNextChunk, options.interval);

    return deferred.promise;
};

module.exports = chunk;
