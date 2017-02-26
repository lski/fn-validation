const isString = require('../utils/is-string');

module.exports = (regex, message = 'Value doesnt match pattern') => {

    regex = isString(regex) ? new RegExp(regex) : regex;

    return (val) => {

        return regex.test(val) ? [] : [message];
    };
};