import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
export class RideRequestConfirmationPage implements OnInit{
  destinatioLatitude:any;
  destinatonLongitude:any;
  originLatitude:any;
  originLongitude:any;
  @ViewChild('map') mapElement: ElementRef;
  ngOnInit(): void {
    this.destinatioLatitude=this.navParams.get("destinatioLatitude");
    this.destinatonLongitude= this.navParams.get("destinatonLongitude");
    this.initMap();
  }
  constructor(
     public navCtrl: NavController,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RideRequestConfirmationPage');
  }
  ionViewDidEnter() {
    this.initMap()
  }

 initMap() {
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;
    navigator.geolocation.getCurrentPosition((location) => {

      console.log(location);
      this.originLatitude= location.coords.latitude;
      this.originLongitude= location.coords.longitude;
    var map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 12,
      center: {lat: location.coords.latitude, lng:  location.coords.longitude}
    });
   directionsDisplay.setMap(map);
   this.calculateAndDisplayRoute(directionsService, directionsDisplay);
  });}

  calculateAndDisplayRoute(directionsService, directionsDisplay) {
    console.log("origin info", this.originLatitude,this.originLongitude)
    console.log("destination info", this.destinatioLatitude,this.destinatonLongitude)
    directionsService.route({
     
      origin: {lat: this.originLatitude, lng:this.originLongitude},  // Haight.
      destination: {lat: this.destinatioLatitude, lng: this.destinatonLongitude},  // Ocean Beach.
      // Note that Javascript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: google.maps.TravelMode["DRIVING"]
    }, function(response, status) {
      if (status == 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        console.log('Directions request failed due to ' + status);
      }
    });
  }

}
