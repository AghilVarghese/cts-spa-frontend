import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heater-device',
  templateUrl: './heater-device.component.html',
  styleUrls: ['./heater-device.component.scss']
})
export class HeaterDeviceComponent implements OnInit {
  device: any;
  currentTemperature: string;
  requiredTemperature: string;
  deviceName: string;
  deviceStateClass:string;

  constructor(private dataService: DataService, private utilityService: UtilityService, private router: Router) { }

  ngOnInit() {
    this.device = this.utilityService.getSelectedDevice();
    console.log('device.....')
    console.log(this.device)
    if (this.device == undefined) {
      this.router.navigate(['/'])
    } else {
      this.getPoolHeaterDetails();
      this.getPoolHeaterStatus();
    }
  }

  getPoolHeaterDetails() {
    let params = {
      productKey: this.device.productKey,
      deviceName: this.device.deviceName,
      propertyName: 'currentTemperature',
      propertyValue: '',
      serviceName: ''
    };
    this.dataService.queryDevicePropertyStatus(params).subscribe((res: any) => {
      console.log('product details');
      console.log(res);
      // setTimeout(this.getPoolHeaterDetails, 2000);
      setTimeout(() => {
        this.getPoolHeaterDetails();
      }, 2000);
      let props = res.data.list;
      for (let i in props) {
        if (props[i].identifier == 'currentTemperature') {
          this.currentTemperature = props[i].value;
        }
        if (props[i].identifier == 'requiredTemperature') {
          this.requiredTemperature = props[i].value;
        }
      }
    });
  }
  getPoolHeaterStatus() {
    let params = {
      productKey: this.device.productKey,
      deviceName: this.device.deviceName,
      propertyName: '',
      propertyValue: '',
      serviceName: ''
    };
    this.dataService.batchGetDeviceState(params).subscribe((res: any) => {
      console.log('product status');
      console.log(res);
      // setTimeout(this.getPoolHeaterStatus, 2000);
      setTimeout(() => {
        this.getPoolHeaterStatus();
      }, 2000);
      let status = res.deviceStatusList[0];
      this.deviceStateClass = status.status == "OFFLINE" ? 'text-danger' : 'text-success';
      this.deviceName = status.deviceName;
    });;
    // setTimeout(this.getPoolHeaterStatus, 1000);
  }
  updateHeaterUserTemperature(temperature: string) {
    console.log(temperature);
    let params = {
      productKey: this.device.productKey,
      deviceName: this.device.deviceName,
      propertyName: 'requiredTemperature',
      propertyValue: temperature,
      serviceName: 'setPoolTemperature'
    };
    this.dataService.setPoolTemperature(params).subscribe((res: any) => {
      console.log(res);
    });
  }

}
