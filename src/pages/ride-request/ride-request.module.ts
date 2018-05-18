import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RideRequestPage } from './ride-request';

@NgModule({
  declarations: [
    RideRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(RideRequestPage),
  ],
})
export class RideRequestPageModule {}
