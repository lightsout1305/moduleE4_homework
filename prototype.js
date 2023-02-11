const person = {
    'city': 'Moscow'
};

const student = Object.create(person);

student.ownCity = 'Krasnoyarsk';

console.log(Object.getPrototypeOf(student));

for (let key in student) {
    if (student.hasOwnProperty(key)) {
        console.log(key);
    }
}

