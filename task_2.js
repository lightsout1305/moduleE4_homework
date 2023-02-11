function ifObjectHasProperty (property, objet) {
    return objet.hasOwnProperty(property);
}

const objet = {
    'str': 'string',
    1: 'no worries'
};

console.log(ifObjectHasProperty(1, objet));
