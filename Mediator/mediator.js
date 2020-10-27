class officialDealer {
    constructor() {
        this.customers = [];
    }

    orderCar(customer, car, info) {
        const name = customer.getName();

        console.log(`Order name: ${name}. Order car is ${car}`);
        console.log(`Additional info: ${info}`);
        this.addToCustomerList(name);
    }

    addToCustomerList(name) {
        this.customers.push(name);
    }

    getCustomerList() {
        return this.customers;
    }
}

class Customer {
    constructor(name, dealerMediator) {
        this.name = name;
        this.dealerMediator = dealerMediator;
    }

    getName() {
        return this.name;
    }

    makeOrder(car, info) {
        this.dealerMediator.orderCar(this, car, info);
    }
}

const mediator = new officialDealer();

const yauhen = new Customer('Yauhen', mediator);
const valera = new Customer('Valera', mediator);

yauhen.makeOrder('Tesla', 'With autopilot!');
valera.makeOrder('Audi', 'With parktronik!');

console.log(mediator.getCustomerList());