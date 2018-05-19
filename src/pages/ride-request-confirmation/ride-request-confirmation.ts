import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { } from 'googlemaps';

/**
 * Generated class for the RideRequestConfirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ride-request-confirmation',
  templateUrl: 'ride-request-confirmation.html',
})
export class RideRequestConfirmationPage {

  constructor(
     public navCtrl: NavController,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RideRequestConfirmationPage');
  }

}
