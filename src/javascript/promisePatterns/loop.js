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
