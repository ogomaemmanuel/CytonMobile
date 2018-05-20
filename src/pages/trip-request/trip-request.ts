import { Component, ViewChild, OnInit, NgZone, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { } from 'googlemaps';

/**
 * Generated class for the TripRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trip-request',
  templateUrl: 'trip-request.html',
})
export class TripRequestPage {

 
  
  @ViewChild("places") places: ElementRef;
  public latitude: any;
  public longitude: any;
  public map: any;
  public infowindow: any
  public  google:any;
  @ViewChild('map') mapElement: ElementRef;
  public constructor(
    public navCtrl: NavController,
    public zone: NgZone,
    public navParams: NavParams) {
  }

  ngOnInit(): void {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RideRequestPage');
  }
  ionViewDidEnter() {
    navigator.geolocation.getCurrentPosition((location) => {
      console.log(location);
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        center: { lat: location.coords.latitude, lng: location.coords.longitude },
        zoom: 12
      });
    });

    let defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(0.1540843, 33.4099837),
    )

    let input = document.getElementById('pickup_location').getElementsByTagName('input')[0];
    let autocomplete = new google.maps.places.Autocomplete(input, {types: ['geocode'], bounds: defaultBounds});
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      // retrieve the place object for your use
      let place = autocomplete.getPlace();
      this.createMaker(place);
      console.log(place.geometry.location.lat());
      console.log(place.geometry.location.lng());
    });
  }

  createMaker(place:any){
    let placeLoc = place.geometry.location;
    let marker = new google.maps.Marker({
      map:this.map,
      position: placeLoc,
      title: 'Hello World!'
    });
    //marker.setMap(this.map);
    this.navCtrl.push("RideRequestConfirmationPage",{destinatioLatitude:placeLoc.lat(),destinatonLongitude:placeLoc.lng()})
  }

}
