/**

 * Описание задачи: Напишите функцию, которая возвращает новый объект без указанных значений.
 * Ожидаемый результат: ({ a: 1, b: 2 }, 'b') => { a: 1 }
 * @param {Object} object - любой объект
 * @param {?} args - список значений для удаления
 * @returns {Object} - новый объект без удаленных значений
 */

const without = (object, ...args) => {
    // throw new Error(`Напишите здесь свое решение ${object} ${args}`);
    const obectCopy = { ...object };

    for (key in obectCopy) {
        args.forEach(deleteKey => {
            if (deleteKey === key) delete obectCopy[key];
        });
    };

    return obectCopy;
};

const data = { a: 1, b: 2, c: 3 };
console.log(without(data, 'b', 'c')); // { a: 1 }
