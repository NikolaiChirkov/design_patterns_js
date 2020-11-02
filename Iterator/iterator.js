class Iterator {
    constructor(el) {
        this.index = 0;
        this.keys = Object.keys(el);
        this.elements = el;
    }

    next() {
        return this.elements[this.keys[this.index++]];
    }

    hasNext() {
        return this.index < this.keys.length;
    }
}

const collection = new Iterator({
    audi: { model: 'Audi', color: 'black', price: '20000' },
    tesla: { model: 'Tesla', color: 'gray', price: '40000' },
    bmw: { model: 'BMW', color: 'white', price: '30000' }
});

while(collection.hasNext()) {
    console.log(collection.next());
}