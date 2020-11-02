class Driver {
    constructor(command) {
        this.command = command;
    }

    execute() {
        this.command.execute();
    }
}

class Engine {
    constructor() {
        this.state = false;
    }

    on() {
        this.state = true;
    }

    off() {
        this.state = false;
    }
}

class OnStartCommmand {
    constructor(engine) {
        this.engine = engine;
    }

    execute() {
        this.engine.on();
    }
}

class OnSwitchOffCommand {
    constructor(engine) {
        this.engine = engine;
    }

    execute() {
        this.engine.off();
    }
}

const engine = new Engine();

console.log(engine);
console.log("");

const onStartCommmand = new OnStartCommmand(engine);
const driver = new Driver(onStartCommmand);
driver.execute();

console.log(engine);