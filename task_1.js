function MyProperties (obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`Ключ ${key}, значение ${obj[key]}`);
        }
    }
}

const objet = {
    'str': 'string',
    1: 'no worries'
};

MyProperties(objet);

