import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';

/**
 * Generated class for the TripHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trip-history',
  templateUrl: 'trip-history.html',
})
export class TripHistoryPage {
  @ViewChild('myTabs') tabRef: Tabs;
  tab1Root: any = 'UpcomingTripsPage';
  tab2Root: any = 'PastTripHistoryPage';
  constructor(
     public navCtrl: NavController,
     public navParams: NavParams) {
       

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripHistoryPage');
  }
  ionViewDidEnter() {
    this.tabRef.select(1);
   }

}
