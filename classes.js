class Parent {
    constructor(ownCity) {
        this.ownCity = ownCity || 'Moscow';
        this.ownFlat = true;
        }
    getInfo () {
        return 'I live in ' + this.ownCity;
    }
}

// function Parent1 (ownCity) {
//     this.ownCity = ownCity;
//     this.ownFlat = true;
//     this.getInfo = function () {
//         console.log('I live in this ' + this.ownCity);
//     }
// }
//
// const child = new Parent('Moscow');
//
// const child1 = new Parent1('Belgorod');


class Child extends Parent {
    constructor(isStudent, city, ownCity) {
        super(ownCity);
        this.isStudent = isStudent;
        this.city = isStudent ? city : ownCity;
    }
    getInfo() {
        if (this.isStudent) {
            return 'I study in ' + this.city;
        }
        else {
            return super.getInfo();
        }
    }
}

const student = new Child(true, 'Peter');
console.log(student.getInfo());

const employee = new Child(false, 'Moscow');
console.log(employee.getInfo());

console.log(employee instanceof Parent);


class Amazing {
    static cool() {
        console.log('cool');
    }
    wow() {
        console.log('wow');
    }
}


class Wonderful extends Amazing {
    static awesome() {
        super.cool();
        console.log('awesome');
    }
    great() {
        Amazing.cool();
        console.log('great');
    }
}

Amazing.cool();
Wonderful.cool();
Wonderful.awesome();

const instance = new Wonderful();
instance.cool();
