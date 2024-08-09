/**

 * Описание задачи: Напишите функцию, которая делает глубокую проверку на пустоту объекта.
 * Пустые значения: '', null, NaN, undefined, [], {}
 * Ожидаемый результат: ({}) => true,
 ({ a: { b: undefined } }) => true,
 ({ a: { b: [] } }) => true
 * @param {Object} object - любой объект
 * @returns {boolean}
 */

const isEmptyDeep = (object) => {
    // throw new Error(`Напишите здесь свое решение ${object}`);
    const objectValues = Object.values(object);

    return objectValues.every((value) => {

        const isEmptyString = value === '';
        const isNull = value === null;
        const isNan = Number.isNaN(value);
        const isUndefined = value === undefined;
        const isObject = typeof value === 'object' && value !== null && !Array.isArray(value);

        if (isEmptyString || isNan || isUndefined || isNull) return true;

        if (isObject) {
            return isEmptyDeep(value);
        };

        return false;
    });
};

const data = { a: { b: undefined } };
const data2 = { a: { b: 1 } };
console.log(isEmptyDeep(data)); // true
console.log(isEmptyDeep(data2)); // false
