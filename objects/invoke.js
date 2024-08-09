/**

 * Описание задачи: Напишите функцию, которая вызывает метод массива на заданный путь объекта.
 * Ожидаемый результат: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]
 * @param {Object} object
 * @param {String} path - путь в объекте
 * @param {String} func - метод массива для исполнения
 * @param {Array} [args] - список аргументов
 * @returns {?}
 */

function invoke(object, path, func, args) {

    const pathParts = path.split('.');
    let finalPath = object;

    for (let i = 0; i < pathParts.length; i++) {
        finalPath = finalPath[pathParts[i]];
    };

    return finalPath[func](...args);
};

const data = { a: { b: [1, 2, 3] } }
console.log(
    invoke(data, 'a.b', 'splice', [1, 2]),
    invoke({ a: 'asfaf' }, 'a', 'includes', ['sf']),
    invoke({ a: 'asfaf' }, 'a', 'includes', ['b']),
    invoke({ a: { b: [1, 2, 3], c: { d: {} } } }, 'a.c', 'hasOwnProperty', ['d']),
    invoke({ a: { b: [1, 2, 3], c: { d: [1, 2, 3] } } }, 'a.c.d', 'filter', [item => item < 2]),
    invoke({ a: { b: [1, 2, 3], c: { d: [1, 2, 3] } } }, 'a.c.d', 'reduce', [(acc, item) => acc += item, ''])
); // [2, 3]


module.exports = invoke;



// const invoke = (object, path, func, args) => {
//     // throw new Error(`Напишите здесь свое решение ${object} ${path} ${func} ${args}`);
//     let argumentsOfMethod = args;
//     if (typeof args[0] === 'string') {
//         const callMethod = new Function('object', `return object.${path}.${func}('${argumentsOfMethod}')`);
//         return callMethod(object);
//     };

//     const callMethod = new Function('object', `return object.${path}.${func}(${argumentsOfMethod})`);
//     return callMethod(object);
// };
