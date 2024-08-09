/**
 * Сара пишет сложные клиентские приложения на ангуляре. Поэтому ей часто приходится создавать и модифицировать сервисы.
 * Сервисы могут использовать другие сервисы. Однако они не должны быть взаимозависимыми.
 *
 * Напишите функцию которая определяет есть ли цикличная зависимость между сервисами в проекте Сары.
 * Зависимости описаны объектом, ключи которого являются именами сервисов, а значения—это сервисы-зависимости.
 *
 * Пример:
 *
 * hasCircularDependency({
 *  http: [],
 *  apiClient: ['http'],
 * }) === false
 *
 * hasCircularDependency({
 *  http: ['dogsApi'],
 *  apiClient: ['http'],
 *  dogsApi: ['apiClient'],
 * }) === true
 *
 * @param {Object.<string, Array.<string>>} servicesMap
 * @returns {boolean}
 */
function hasCircularDependency(servicesMap) {
    const checkedService = new Set();
    const currentService = new Set();

    function checkDependency(service) {
        if (currentService.has(service)) return true;
        if (checkedService.has(service)) return false;

        checkedService.add(service);
        currentService.add(service);

        for (const dependency of servicesMap[service]) {
            if (checkDependency(dependency)) return true;
        };

        currentService.delete(service);
        return false;
    };

    for (const service in servicesMap) {
        if (checkDependency(service)) return true;
    };

    return false;
}

console.log(hasCircularDependency({
    http: ['dogsApi'],
    apiClient: ['http'],
    dogsApi: ['apiClient'],
}))

module.exports = hasCircularDependency;
