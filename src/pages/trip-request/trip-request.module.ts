import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TripRequestPage } from './trip-request';

@NgModule({
  declarations: [
    TripRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(TripRequestPage),
  ],
})
export class TripRequestPageModule {}
