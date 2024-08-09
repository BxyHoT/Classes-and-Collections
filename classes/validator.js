/**
 * Реализуйте класс Validator, который будет проверять строки.
 * К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет.
 * Если является - возвращает true, если не является - то false.
 * Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена,
 * метод isDate для проверки даты и метод isPhone для проверки телефона:
 */
class Validator {
    isEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }
    isDomain = (domain) => {
        const domainPattern = /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
        return domainPattern.test(domain);
    }
    isDate = (date) => {
        const regex = /^\d{2}\.\d{2}\.\d{4}$/;

        if (!regex.test(date)) return false;

        const [day, month, year] = date.split('.').map(date => Number(date));
        const dateWithCurrentParam = new Date(year, month - 1, day);
        const isEqvalYear = dateWithCurrentParam.getFullYear() === year;
        const isEqvalMonth = dateWithCurrentParam.getMonth() === month - 1;
        const isEqvalDays = dateWithCurrentParam.getDate() === day;

        if (isEqvalDays && isEqvalMonth && isEqvalYear) return true;
        return false;
    }
    isPhone = (phone) => {
        const phonePattern = /^\+7[-\s]?(\(?971\)?)[-\s]?(\d{3})[-\s]?(\d{2})[-\s]?(\d{2})$|^8[-\s]?(\(?971\)?)[-\s]?(\d{3})[-\s]?(\d{2})[-\s]?(\d{2})$/;
        return phonePattern.test(phone);
    }
}

const validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны

module.exports = Validator;
