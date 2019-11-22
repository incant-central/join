'use strict';

const help = "Takes an array of strings and joins them together";

function join(input) {
    if (typeof input === 'string') return input;
    if (!Array.isArray(input) && !(Array.isArray(input) || typeof input[0] === 'string')) throw new Error('invalid input');
    let [ subject, delim = '' ] = Array.isArray(input[0])
        ? input
        : [ input ];
    return subject.join(delim);
}

join.study = () => help;

module.exports = join;
