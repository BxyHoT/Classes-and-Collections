/**
 * Напишите функцию has(path, object) возвращающую true, если в объекте есть свойство
 * описанное массивом path, иначе false
 *
 * Пример:
 *
 * has(['a'], { a: 1 }) === true
 * has(['b'], { a: 1 }) === false
 * has(['o', 'a'], { o: { a: 2 } }) === true
 *
 * @param {string[]} path
 * @param {object} object
 * @returns {boolean}
 */
function has(path, object) {
    let currentPath = object;

    for (i = 0; i < path.length; i++) {
        const isUndefined = currentPath === undefined;
        const isNull = currentPath === null;

        if (isUndefined || isNull || !Object.prototype.hasOwnProperty.call(currentPath, path[i])) return false;
        currentPath = currentPath[path[i]];
    };

    return true;
}


module.exports = has;
