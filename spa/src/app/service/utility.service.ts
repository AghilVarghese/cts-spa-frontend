import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  products: any;
  heaterDevices: any;
  selectedDevice: any

  constructor() { }

  setSelectedDevice(selectedDevice: any) {
    this.selectedDevice = selectedDevice;
  }
  getSelectedDevice() {
    return this.selectedDevice;
  }

  setProducts(products: any) {
    this.products = products;
  }
  setHeaterDevices(heaterDevices: any) {
    this.heaterDevices = heaterDevices;
  }

  getProducts() {
    return this.products;
  }
  getHeaterDevices() {
    return this.heaterDevices;
  }
}
