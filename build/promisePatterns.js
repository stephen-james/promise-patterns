(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.promisePatterns = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var stash = require('./stash');
var chunk = require('./chunk');
var loop = require('./loop');

module.exports = {
    stash: stash,
    chunk: chunk,
    loop: loop
};

},{"./chunk":2,"./loop":4,"./stash":5}],2:[function(require,module,exports){
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

},{"./chunkArray":3,"bluebird":"bluebird","underscore":"underscore"}],3:[function(require,module,exports){
var chunkArray = function chunkArray(arr, chunkSize) {
    var dataChunks = [];
    var dataChunk = [];

    var threshold = chunkSize - 1;

    for (var i = 0, len = arr.length; i < len; i++) {
        dataChunk.push(arr[i]);
        if (i % chunkSize === threshold || i === len - 1) {
            dataChunks.push(dataChunk);
            dataChunk = [];
        }
    }

    return dataChunks;
};

module.exports = chunkArray;

},{}],4:[function(require,module,exports){
var Promise = require('bluebird');

var loop = function(state, guard, operation, postOperation) {
    return Promise.method(guard.bind(state))()
        .then(function(allowed) {
            if (allowed) {
                return Promise.method(operation.bind(state))()
                    .then(postOperation.bind(state))
                    .then(function() {
                        return loop(state, guard, operation, postOperation);
                    });
            } else {
                return state;
            }
        });
};

module.exports = loop;

},{"bluebird":"bluebird"}],5:[function(require,module,exports){
var Promise = require('bluebird');

var stash = function (maps, key) {
    return function (map) {
        maps[key] = map;
        return Promise.resolve({});
    };
};

module.exports = stash;

},{"bluebird":"bluebird"}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvamF2YXNjcmlwdC9wcm9taXNlUGF0dGVybnMvaW5kZXguanMiLCJzcmMvamF2YXNjcmlwdC9wcm9taXNlUGF0dGVybnMvY2h1bmsuanMiLCJzcmMvamF2YXNjcmlwdC9wcm9taXNlUGF0dGVybnMvY2h1bmtBcnJheS5qcyIsInNyYy9qYXZhc2NyaXB0L3Byb21pc2VQYXR0ZXJucy9sb29wLmpzIiwic3JjL2phdmFzY3JpcHQvcHJvbWlzZVBhdHRlcm5zL3N0YXNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIHN0YXNoID0gcmVxdWlyZSgnLi9zdGFzaCcpO1xudmFyIGNodW5rID0gcmVxdWlyZSgnLi9jaHVuaycpO1xudmFyIGxvb3AgPSByZXF1aXJlKCcuL2xvb3AnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgc3Rhc2g6IHN0YXNoLFxuICAgIGNodW5rOiBjaHVuayxcbiAgICBsb29wOiBsb29wXG59O1xuIiwidmFyIF8gPSByZXF1aXJlKCd1bmRlcnNjb3JlJyk7XG52YXIgUHJvbWlzZSA9IHJlcXVpcmUoJ2JsdWViaXJkJyk7XG52YXIgY2h1bmtBcnJheSA9IHJlcXVpcmUoJy4vY2h1bmtBcnJheScpO1xuXG52YXIgY2h1bmsgPSAgZnVuY3Rpb24gY2h1bmsoaXRlbXMsIHByb2Nlc3MsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICB2YXIgREVGQVVMVF9PUFRJT05TID0ge1xuICAgICAgICBjaHVua1NpemU6IDEwLFxuICAgICAgICBpbnRlcnZhbDogMSxcbiAgICAgICAgY2FuY2VsOiBmYWxzZSxcbiAgICAgICAgcmVzdWx0TGltaXQ6IG51bGxcbiAgICB9O1xuXG4gICAgb3B0aW9ucyA9IF8uZXh0ZW5kKHt9LCBERUZBVUxUX09QVElPTlMsIG9wdGlvbnMpO1xuXG4gICAgdmFyIGl0ZW1zVG9Qcm9jZXNzID0gY2h1bmtBcnJheShpdGVtcywgb3B0aW9ucy5jaHVua1NpemUpO1xuICAgIHZhciBkZWZlcnJlZCA9IFByb21pc2UucGVuZGluZygpO1xuICAgIHZhciBjaHVua0luZGV4ID0gMDtcbiAgICB2YXIgb3V0cHV0ID0gW107XG5cbiAgICB2YXIgcHJvY2Vzc05leHRDaHVuayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUocHJvY2Vzcy5jYWxsKGNvbnRleHQsIGl0ZW1zVG9Qcm9jZXNzLnNoaWZ0KCksIGNodW5rSW5kZXgrKykpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0LmNvbmNhdChyZXN1bHRzKTtcblxuICAgICAgICAgICAgICAgIGlmIChpdGVtc1RvUHJvY2Vzcy5sZW5ndGggJiYgKCFvcHRpb25zLnJlc3VsdExpbWl0IHx8IG91dHB1dC5sZW5ndGggPCBvcHRpb25zLnJlc3VsdExpbWl0KSAmJiAhb3B0aW9ucy5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChwcm9jZXNzTmV4dENodW5rLCBvcHRpb25zLmludGVydmFsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKG91dHB1dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHNldFRpbWVvdXQocHJvY2Vzc05leHRDaHVuaywgb3B0aW9ucy5pbnRlcnZhbCk7XG5cbiAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY2h1bms7XG4iLCJ2YXIgY2h1bmtBcnJheSA9IGZ1bmN0aW9uIGNodW5rQXJyYXkoYXJyLCBjaHVua1NpemUpIHtcbiAgICB2YXIgZGF0YUNodW5rcyA9IFtdO1xuICAgIHZhciBkYXRhQ2h1bmsgPSBbXTtcblxuICAgIHZhciB0aHJlc2hvbGQgPSBjaHVua1NpemUgLSAxO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBkYXRhQ2h1bmsucHVzaChhcnJbaV0pO1xuICAgICAgICBpZiAoaSAlIGNodW5rU2l6ZSA9PT0gdGhyZXNob2xkIHx8IGkgPT09IGxlbiAtIDEpIHtcbiAgICAgICAgICAgIGRhdGFDaHVua3MucHVzaChkYXRhQ2h1bmspO1xuICAgICAgICAgICAgZGF0YUNodW5rID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YUNodW5rcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY2h1bmtBcnJheTtcbiIsInZhciBQcm9taXNlID0gcmVxdWlyZSgnYmx1ZWJpcmQnKTtcblxudmFyIGxvb3AgPSBmdW5jdGlvbihzdGF0ZSwgZ3VhcmQsIG9wZXJhdGlvbiwgcG9zdE9wZXJhdGlvbikge1xuICAgIHJldHVybiBQcm9taXNlLm1ldGhvZChndWFyZC5iaW5kKHN0YXRlKSkoKVxuICAgICAgICAudGhlbihmdW5jdGlvbihhbGxvd2VkKSB7XG4gICAgICAgICAgICBpZiAoYWxsb3dlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLm1ldGhvZChvcGVyYXRpb24uYmluZChzdGF0ZSkpKClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocG9zdE9wZXJhdGlvbi5iaW5kKHN0YXRlKSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9vcChzdGF0ZSwgZ3VhcmQsIG9wZXJhdGlvbiwgcG9zdE9wZXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBsb29wO1xuIiwidmFyIFByb21pc2UgPSByZXF1aXJlKCdibHVlYmlyZCcpO1xuXG52YXIgc3Rhc2ggPSBmdW5jdGlvbiAobWFwcywga2V5KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtYXApIHtcbiAgICAgICAgbWFwc1trZXldID0gbWFwO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHt9KTtcbiAgICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdGFzaDtcbiJdfQ==
