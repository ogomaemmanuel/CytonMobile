import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PastTripHistoryPage } from './past-trip-history';

@NgModule({
  declarations: [
    PastTripHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(PastTripHistoryPage),
  ],
})
export class PastTripHistoryPageModule {}
