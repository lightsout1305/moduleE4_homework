function Electronics (name, energy) {
    this.power = true;
    this.energy = energy;
    this.name = name;
    this.energyConsumed = 0;
}

Electronics.prototype.getInfo = function () {
    console.log(`The info: name - ${this.name}, energy - ${this.energy} watt, power - ${this.power}, 
    energy consumed - ${this.energyConsumed} watt`);
}

Electronics.prototype.plug = function () {
    this.power = true;
    this.energyConsumed += 10
}

Electronics.prototype.unPlug = function () {
    this.power = false;
}

Electronics.prototype.switchOn = function () {
    this.power = true;
    this.energyConsumed += 10;
}

Electronics.prototype.switchOff = function () {
    this.power = false;
}

function Devices (name, energy, price, type) {
    this.name = name;
    this.energy = energy;
    this.price = price;
    this.type = type;
    this.isPortable = true;
}

Devices.prototype = new Electronics('device', 100);

Devices.prototype.work = function () {
    if (this.power) {
        this.energyConsumed += 10;
    }
}

Devices.prototype.recharge = function () {
    this.plug();
    this.isPortable = false;
    console.log(`The device is being recharged. Energy consumed - ${this.energyConsumed} watt.`)
}

Devices.prototype.getDeviceInfo = function () {
    console.log(`The device info: name - ${this.name}, energy - ${this.energy} watt, type - ${this.type},
     price - ${this.price}, power - ${this.power}, energy consumed - ${this.energyConsumed} watt`);
}


function Hardware (name, energy, price, type) {
    this.name = name;
    this.energy = energy;
    this.price = price;
    this.type = type;
}

Hardware.prototype = new Electronics('hardware', 500);

Hardware.prototype.superMode = function () {
    if (this.power) {
        this.energyConsumed += 300;
    }
}

Hardware.prototype.getHardwareInfo = function () {
    console.log(`The hardware info: name - ${this.name}, energy - ${this.energy} watt, type - ${this.type}, price - ${this.price},
     power - ${this.power}, energy consumed - ${this.energyConsumed} watt`);
}

const iPhone = new Devices('iPhone', 100, '1500', 'phone');
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