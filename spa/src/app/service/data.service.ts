import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8091/";

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    'Access-Control-Allow-Credentials': 'false'
  });

  options = {
    headers: this.headers
  };

  getProductDetails() {
    let rUrl = this.url + 'getAllProductList';
    return this.http.get(rUrl, this.options);
  }

  queryDevicePropertyStatus(params: any) {
    let rUrl = this.url + 'queryDevicePropertyStatus';
    return this.http.post(rUrl, params, this.options);
  }

  batchGetDeviceState(params: any) {
    let rUrl = this.url + 'batchGetDeviceState';
    return this.http.post(rUrl, params, this.options);
  }

  setPoolTemperature(params: any) {
    let rUrl = this.url + 'invokeThingService';
    return this.http.post(rUrl, params, this.options);
  }
  getDeviceListOfProduct(productKey: string) {
    let rUrl = this.url + 'getDeviceListOfProduct/' + productKey;
    return this.http.get(rUrl, this.options);
  }

}
