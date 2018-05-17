import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverManagementPage } from './driver-management';

@NgModule({
  declarations: [
    DriverManagementPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverManagementPage),
  ],
})
export class DriverManagementPageModule {}
