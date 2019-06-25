import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaterDeviceComponent } from './heater-device/heater-device.component';
import { LoginComponent } from './login/login.component';
import { AuthguardService } from './service/authguard.service';
import { ConsoleComponent } from './console/console.component';
import { AddDeviceComponent } from './add-device/add-device.component'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'spa', component: ConsoleComponent, children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthguardService] },
      { path: 'heater', component: HeaterDeviceComponent, canActivate: [AuthguardService] },
      { path: 'adddevice', component: AddDeviceComponent, canActivate: [AuthguardService] }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
