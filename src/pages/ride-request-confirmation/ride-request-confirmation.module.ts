import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RideRequestConfirmationPage } from './ride-request-confirmation';

@NgModule({
  declarations: [
    RideRequestConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(RideRequestConfirmationPage),
  ],
})
export class RideRequestConfirmationPageModule {}
