class Builder {
    build() {
        this.addEngine();
        this.installChassis();
        this.addElectronic();
        this.collectAccessories();
    }
}

class TeslaBuilder extends Builder {
    addEngine() {
        console.log('Add Electronic Engine');
    }

    installChassis() {
        console.log('Install Tesla Chassis');
    }

    addElectronic() {
        console.log('Add special electronic');
    }

    collectAccessories() {
        console.log('Collect Accessories');
    }
}

class BmwBuilder extends Builder {
    addEngine() {
        console.log('Add BMW Engine');
    }

    installChassis() {
        console.log('Install BMW Chassis');
    }

    addElectronic() {
        console.log('Add electronic');
    }

    collectAccessories() {
        console.log('Collect Accessorier');
    }
}

const teslaBuilder = new TeslaBuilder();
const bmwBuilder = new BmwBuilder();

teslaBuilder.build();

console.log('');

bmwBuilder.build();