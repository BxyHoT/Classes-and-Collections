/**
 * Напишите функцию rle(value) реализующую алгоритм сжатия строки.
 *
 * Пример:
 *
 * rle('AAABC') === '3ABC'
 * rle('AAAaaB') === '3A2aB'
 *
 * @param {string} value
 * @returns {string}
 */
function rle(value) {
    const arrayLetter = value.split('');
    let doneString = '';
    let numberOfMatches = 0;

    arrayLetter.forEach((letter, index) => {
        const isEqualNext = letter === arrayLetter[index + 1];
        const isEqualPrevious = letter === arrayLetter[index - 1];

        if (!isEqualNext && !isEqualPrevious) {
            doneString += letter;
            numberOfMatches = 0;
        };

        if (isEqualNext && !isEqualPrevious) {
            let nextIndex = index + 1;
            numberOfMatches = 1;

            while (letter === arrayLetter[nextIndex]) {
                ++nextIndex;
                ++numberOfMatches;
            };

            doneString += numberOfMatches + letter;
        };

    });

    return doneString;
}

module.exports = rle;
