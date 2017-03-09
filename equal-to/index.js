const isFunc = require('../utils/is-func');

/**
 * Compares to a value to a another value returned from a function
 * @param {(func|*)} otherValue - If a function the return value from the function is compared, otherwise just does an exact match on the value 
 * @param {string} message - The error message to return to the user
 */
module.exports = (otherValue, message = 'Values are not equal') => {

    var check = isFunc(otherValue) ? otherValue : () => otherValue;

    return (val) => {
        return check() === val ? [] : [message];
    };
};