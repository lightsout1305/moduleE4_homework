const me = {
    'name': 'Dmitri',
    'surname': 'Plotnikov',
    'age': 24,
    'job': 'qa engineer',
    'languages': function languages () {
        return 'English, French' // метод объекта
    }
};
console.log(me.age); // точечная нотация
console.log(me['age']); // скобочная нотация
console.log(me.languages());


const lang = 'python';

const collection = {};

collection[lang] = 'Лучший язык программирования';

delete collection.python;

console.log(collection);

console.log('name' in me);
console.log('x' in me);

for (let key in me) {
    console.log(me[key]);
}

