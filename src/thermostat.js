'use strict';

class Thermostat {
  constructor() {
    this.MAXIMUM_TEMPERATURE = [25, 32]
    this.MINIMUM_TEMPERATURE = 10;
    this.temperature = 20;
    this.powerSave = true
  }

  getTemperature() {
    return this.temperature;
  };

  upTemp() {
    if (this.isMaxTemp()){ }
    else {
      this.temperature ++;
    }
  };

  downTemp() {
    if (this.isMinTemp()){  // Go with this method but only if the temperature in already 10 degrees
      return;
    }
    this.temperature --;
  }

  isMinTemp() {  // is , convention for a boolean
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

  isMaxTemp() {
    if (this.powerSave) {
      return this.temperature === this.MAXIMUM_TEMPERATURE[0];
    } else {
      return this.temperature === this.MAXIMUM_TEMPERATURE[1];
    }
  }
  // === comparison similar need to be

  powerSaveOff() {
    this.powerSave = false;
  }



};
