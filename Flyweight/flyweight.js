class Car {
    constructor(model) {
        this.model = model;
    }
}

class CarFactory {
    constructor(name) {
        this.models = {};
    }

    create(name) {
        let model = this.models[name];
        if (model) return model;
        console.count('model');
        this.models[name] = new Car(name);
        return this.models[name];
    }

    getModels() {
        console.table(this.models);
    }
}

const factory = new CarFactory();

const bmw = factory.create('BMW');
const audi = factory.create('Audi');
const tesla = factory.create('Tesla');
const blackTesla = factory.create('Tesla');

console.log(factory.getModels());