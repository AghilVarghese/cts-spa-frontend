import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';
import { UtilityService } from './service/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'spa';
  heaterDevices = [];

  constructor(private dataService: DataService, private utilityService: UtilityService) { }

  ngOnInit() {
    this.getProductDetails();
  }

  getProductDetails() {
    this.dataService.getProductDetails().subscribe((res: any) => {
      console.log('product details');
      console.log(res);
      let products = res.data.list;
      this.utilityService.setProducts(products);
      for (let i in products) {
        let item = products[i];
        if (item.productName == 'Heater') {
          this.getHeaterDevicesList(item);
          break;
        }
      }
    });
  }
  getHeaterDevicesList(product: any) {
    this.dataService.getDeviceListOfProduct(product.productKey).subscribe((res: any) => {
      console.log('devices..')
      console.log(res);
      this.heaterDevices = res.data;
      this.utilityService.setHeaterDevices(this.heaterDevices);
    });
  }

}
