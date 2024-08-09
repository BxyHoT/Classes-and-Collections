/**
 * Напишите функцию flatten(array) которая делает вложенный массив плоским
 *
 * Пример:
 *
 * flatten([1, [2, 3]]) === [1, 2, 3]
 * flatten([1, [2, [3, 4]]]) === [1, 2, 3, 4]
 *
 * @param {Array.<number|[]>} array
 * @returns {number[]}
 */
function flatten(array) {
    if (!Array.isArray(array)) return;
    const flattenArray = [];
    if (array.length === 0) return flattenArray;

    function flattenRecuse(arr) {
        arr.forEach(item => {
            if (Array.isArray(item)) {
                flattenRecuse(item);
            } else flattenArray.push(item);
        });
    };
    flattenRecuse(array);

    return flattenArray;
}


module.exports = flatten;
