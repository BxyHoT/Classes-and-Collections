/**
 * Ранее мы уже решали задачу валидации последовательности скобок в строке.
 *
 * На этот раз напишите функцию parentheses(value) валидирующую строку с несколькими типами скобок.
 *
 * Пример:
 *
 * parentheses('<>') === true
 * parentheses('<}') === false
 *
 * @param {string} value – строка из набора символов (, ), {, }, <, >.
 * @returns {boolean}
 */
function parentheses(value) {
    if (value === '') return false;

    let stringCopy = value;
    const regex = /(?:\(\)|\{\}|\[\]|\<\>)/g;

    while (regex.test(stringCopy)) {
        stringCopy = stringCopy.replace(regex, '');
    };

    return stringCopy === '';
}

module.exports = parentheses;
