class Car {
    accept(visitor) {
        visitor(this);
    }
}

class Tesla extends Car {
    info() {
        return 'It is a Tesla car';
    } 
}

class Bmw extends Car {
    info() {
        return 'It is a BMW car';
    }
}

class Audi extends Car {
    info() {
        return 'It is a Audi car';
    }
}

function exportVisitor(car) {
    if (car instanceof Tesla) {
        car.export = console.log(`Exported data: ${car.info()}`);
    }
    if (car instanceof Bmw) {
        car.export = console.log(`Exported data: ${car.info()}`);
    }
    if (car instanceof Audi) {
        car.export = console.log(`Exported data: ${car.info()}`);
    }
}

const tesla = new Tesla();
const bmw = new Bmw();

console.log(tesla.accept(exportVisitor));
console.log(bmw.accept(exportVisitor));