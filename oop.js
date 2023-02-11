function PL (name, type) {
    this.name = name;
    this.type = type;
}

PL.prototype.describe = function () {
    console.log(`This PL's name is ${this.name}. It has ${this.type} typing`)
};

const Python = new PL('Python', 'dynamic');

const JavaScript = new PL('JavaScript', 'dynamic');

const CSharp = new PL('C#', 'strong');

Python.describe();
JavaScript.describe();
CSharp.describe();