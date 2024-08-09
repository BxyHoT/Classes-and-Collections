/**
 * Петя опубликовал картинку X секунд назад.
 *
 * Напишите функцию timeago(seconds) возвращаю текстовое представление периода прошедшего со времени публикации.
 * Для публикаций опубликованных более четырёх недель назад возвращайте строку 'undefined', ведь их никто не увидит.
 *
 * Пример:
 *
 * timeago(0) === 'just now'
 * timeago(10) === '10 seconds ago'
 * timeago(60) === '1 minute ago'
 * timeago(3600) === '1 hour ago'
 *
 * @param {number} seconds
 * @returns {string}
 */
function timeago(seconds) {
    if (seconds < 10) return 'just now';

    if (seconds < 60) {
        const second = `${Math.floor(seconds / 10)}0 `;
        return second + 'seconds ago';
    };

    if (seconds < 3600) {
        const minutes = `${Math.floor(seconds / 60)} `
        if (minutes > 29) return '30 minutes ago'
        if (minutes > 1) return minutes + 'minutes ago';
        return minutes + 'minute ago';
    };

    if (seconds < 86400) {
        const hours = `${Math.floor(seconds / 3600)} `;
        if (hours > 11) return '12 hours ago';
        if (hours > 1) return hours + 'hours ago';
        return '1 hour ago';
    }

    if (seconds < 172800) {
        const day = `${Math.floor(seconds / 86400)} `;
        return day + 'day ago';
    };

    if (seconds < 604800) return 'a few days ago';

    if (seconds < 2419200) {
        const week = `${Math.floor(seconds / 604800)} `;
        if (week > 1) return week + 'weeks ago';
        return week + 'week ago';
    }


    return 'undefined';
}

console.log(
    timeago(125),
)

module.exports = timeago;
