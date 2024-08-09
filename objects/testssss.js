let options = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};
// деструктуризация разбита на несколько строк для ясности
let {
    size: { // положим size сюда
        width,
        height
    },
    items,
    items: [item1, item2],  // добавим элементы к items
    title = "Menu" // отсутствует в объекте (используется значение по умолчанию)
} = options;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200
console.log(items);
console.log(item1);  // Cake
console.log(item2);  // Donut
