
exports.min = function min (array) {
    return Array.isArray(array) && array.length !== 0 ? Math.min(...array) : 0;
}

exports.max = function max (array) {
    return Array.isArray(array) && array.length !== 0 ? Math.max(...array) : 0;
}

exports.avg = function avg (array) {
    return Array.isArray(array) && array.length !== 0 ?
        array.reduce((result, current) => result + current / array.length, 0).toFixed(3) : 0;
}
