function baseStrategy(amount) {
    return amount;
}

function premiumStrategy(amount) {
    return amount * 0.85;
}

function platinumStrategy(amount) {
    return amount * 0.65;
}

class AutoCar {
    constructor(discount) {
        this.discount = discount;
        this.amount = 0;
    }

    checkout() {
        return this.discount(this.amount);
    }

    setAmount(amount) {
        this.amount = amount;
    }
}

const baseCustomer = new AutoCar(baseStrategy);
const premiumCustomer = new AutoCar(premiumStrategy);
const platinumCustomer = new AutoCar(platinumStrategy);

baseCustomer.setAmount(50000);
console.log(baseCustomer.checkout());

premiumCustomer.setAmount(50000);
console.log(premiumCustomer.checkout());

platinumCustomer.setAmount(50000);
console.log(platinumCustomer.checkout());