import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpcomingTripsPage } from './upcoming-trips';

@NgModule({
  declarations: [
    UpcomingTripsPage,
  ],
  imports: [
    IonicPageModule.forChild(UpcomingTripsPage),
  ],
})
export class UpcomingTripsPageModule {}
