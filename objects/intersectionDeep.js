/**

 * Описание задачи: Напишите функцию, которая глубоко находит пересечения объектов и возвращает объект пересечений.
 * Ожидаемый результат: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }
 * @param {Object} firstObject - объект любых значений
 * @param {Object} secondObject - объект любых значений
 * @returns {Object}
 */

const intersectionDeep = (firstObject, secondObject) => {
    // throw new Error(`Напишите здесь свое решение ${firstObject}, ${secondObject}`);
    let intersectionObject = {};

    if (!firstObject || !secondObject) return intersectionObject;

    for (let key in firstObject) {

        if (key in secondObject) {
            const isNullFirstObjectValue = firstObject[key] === null;
            const isNullSecondObjectValue = secondObject[key] === null;
            const isObjectFirstObjectValue = typeof firstObject[key] === 'object';
            const isObjectSecondtObjectValue = typeof secondObject[key] === 'object';

            if (!isNullFirstObjectValue && !isNullSecondObjectValue && isObjectFirstObjectValue && isObjectSecondtObjectValue) {
                let curentProperty = intersectionDeep(firstObject[key], secondObject[key]);

                if (Object.keys(curentProperty).length > 0) {
                    intersectionObject[key] = curentProperty;
                };

            } else if (firstObject[key] === secondObject[key]) {
                intersectionObject[key] = firstObject[key];
            };
        };
    };

    return intersectionObject;
};

const data = { a: 1, b: { c: 3 } };
const data2 = { c: 1, b: { c: 3 } };
console.log(intersectionDeep(data, data2)); // { b: { c: 3 } }
console.log(intersectionDeep({ a: { b: {} } }, { a: { b: {} } }));

module.exports = intersectionDeep;
