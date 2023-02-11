class Electronics {
    constructor(name, energy) {
        this.energy = energy;
        this.name = name;
        this.power = true;
        this.energyConsumed = 0;
    }
    getInfo = function () {
        console.log(`The info: name - ${this.name}, energy - ${this.energy} watt, power - ${this.power}, energy consumed - ${this.energyConsumed} watt`);
    }

    plug = function () {
    this.power = true;
    this.energyConsumed += 10
    }

    unPlug = function () {
    this.power = false;
    }

    switchOn = function () {
    this.power = true;
    this.energyConsumed += 10;
    }

    switchOff = function () {
    this.power = false;
    }
}


class Devices extends Electronics {
    constructor(name, energy, price, type) {
        super(name, energy);
        this.price = price;
        this.type = type;
        this.isPortable = true;
    }

    work = function () {
        if (this.power) {
            this.energyConsumed += 10;
            }
    }

    recharge = function () {
        this.plug();
        this.isPortable = false;
        console.log(`The device is being recharged. Energy consumed - ${this.energyConsumed} watt.`)
    }

    getDeviceInfo = function () {
        console.log(`The device info: name - ${this.name}, energy - ${this.energy} watt, type - ${this.type}, price - ${this.price}, power - ${this.power}, energy consumed - ${this.energyConsumed} watt`);
    }
}


class Hardware extends Electronics {
    constructor(name, energy, price, type) {
        super(name, energy);
        this.price = price;
        this.type = type;
    }

    superMode = function () {
        if (this.power) {
            this.energyConsumed += 300;
        }
    }

    getHardwareInfo = function () {
        console.log(`The hardware info: name - ${this.name}, energy - ${this.energy} watt, type - ${this.type}, price - ${this.price}, power - ${this.power}, energy consumed - ${this.energyConsumed} watt`);
    }
}


const iPhone = new Devices('iPhone', 100, 1500, 'device');
console.log(iPhone.isPortable)
iPhone.switchOn();
iPhone.work();
iPhone.getDeviceInfo();
iPhone.switchOff();
iPhone.recharge();
iPhone.getDeviceInfo();
iPhone.getInfo();

const nvidia = new Hardware('Nvidia 4090 RTX', 1000, 2000, 'video card');
nvidia.superMode();
nvidia.getHardwareInfo();
nvidia.switchOff();
nvidia.getHardwareInfo();
nvidia.switchOn();
nvidia.superMode();
nvidia.getHardwareInfo();
nvidia.unPlug();
nvidia.getHardwareInfo();
nvidia.getInfo();

