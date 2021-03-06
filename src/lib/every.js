'use strict';

module.exports = every;

function every(array, truthTest) {
    for (var i = 0, len = array.length; i < len; i++) {
        if (!truthTest(array[i])) {
            return false;
        }
    }
    return true;
}
