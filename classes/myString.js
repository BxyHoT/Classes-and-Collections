/**
 * Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
 * который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(),
 * который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords,
 * который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */

class MyString {
    reverse = (str) => {
        const isEmptyStr = str === '';

        if (!str && !isEmptyStr) return;
        if (isEmptyStr) return '';

        return str.split('').reverse().join('');
    }
    ucFirst = (str) => {
        const isEmptyStr = str === '';

        if (!str && !isEmptyStr) return;
        if (isEmptyStr) return '';

        let strCopy = str.trim();

        return strCopy[0].toUpperCase() + strCopy.slice(1);
    }
    ucWords = (str) => {
        const isEmptyStr = str === '';

        if (!str && !isEmptyStr) return;
        if (isEmptyStr) return '';

        let strCopy = str;
        let arrWords = strCopy.trim().split(/\s+/);
        arrWords = arrWords.map(item => item[0].toUpperCase() + item.slice(1));
        strCopy = arrWords.join(' ');
        return strCopy;
    }
}

const str = new MyString();

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'
console.log(str.ucWords(' abcde    g   abcde abcde'));

module.exports = MyString;
