import $ from "jquery";
import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  heaters = [];

  constructor(private utilityService: UtilityService, private router: Router) { }

  ngOnInit() {
    // this.utilityService;
    this.getHeaterDevices();

    this.initSideToggle();
  }

  private getHeaterDevices() {
    setTimeout(() => {
      if (this.heaters == undefined || this.heaters.length == 0) {
        this.heaters = this.utilityService.getHeaterDevices();
        this.getHeaterDevices();
      }
    }, 1000)
  }

  openHeaterDeviceConsole(selectedDevice: any) {
    this.utilityService.setSelectedDevice(selectedDevice);
    this.router.navigate(['spa/heater']);
  }

  private initSideToggle() {
    $("#sidebarToggle, #sidebarToggleTop").on('click', function (e) {
      $("body").toggleClass("sidebar-toggled");
      $(".sidebar").toggleClass("toggled");
      if ($(".sidebar").hasClass("toggled")) {
        $('.sidebar .collapse').collapse('hide');
      };
    });
  }

}
