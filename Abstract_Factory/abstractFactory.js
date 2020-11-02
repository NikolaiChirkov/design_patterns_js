function bmwProducer(kind) {
    return kind === 'sport' ? sportCarFactory : familyCarFactory;
}

function sportCarFactory() {
    return new Z4();
}

function familyCarFactory() {
    return new I3();
}

class Z4 {
    info() {
        return "Z4 is sport car!";
    }
}

class I3 {
    info() {
        return "I3 is family car!";
    }
}

const produce = bmwProducer('sport');

const myCar = new produce();

console.log(myCar.info());