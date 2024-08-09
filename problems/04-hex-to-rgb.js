/**
 * Hex и RGB - текстовые форматы для представления цвета в коде.
 *
 * Напишите функцию hexToRgb(color) конвертирующую цвет закодированный в формате HEX
 * в RGB кодированную строку.
 *
 * Пример:
 *
 * hexToRgb('#000000') === 'rgb(0, 0, 0)'
 * hexToRgb('#fff') === 'rgb(255, 255, 255)'
 * hexToRgb('#800080') === 'rgb(128, 0, 128)'
 *
 * @param {string} color
 * @returns {string}
 */
function hexToRgb(color) {
    let hexColor = color.replace(/^#/, '');

    if (hexColor.length === 3) {
        hexColor = '';
        for (i = 0; i < 3; i++) {
            hexColor += color[i + 1] + color[i + 1];
        };
    };

    console.log(hexColor);

    const r = parseInt((hexColor.substring(0, 2)), 16);
    const g = parseInt((hexColor.substring(2, 4)), 16);
    const b = parseInt((hexColor.substring(4, 6)), 16);

    return `rgb(${r}, ${g}, ${b})`;
}

hexToRgb('#000');

module.exports = hexToRgb;
