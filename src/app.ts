const person = {
    name: 'Todd',
    age: 27
};

type Person = typeof person;
type PersonKeys = keyof Person;
type PersonTypes = Person[PersonKeys];

function getProperty(obj: object, key: string) {
    return obj[key];
}

const personName = getProperty(person, 'name');

