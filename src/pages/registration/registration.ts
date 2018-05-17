import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage implements OnInit {
  userLoginFormGroup:FormGroup
  
  constructor(
     public navCtrl: NavController,
     public formBuilder:FormBuilder,
     private auth: AuthProvider,
     public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  ngOnInit(): void {
    this.userLoginFormGroup = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      telephone: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required,Validators.minLength(7)])],
      confirmPassword:['', Validators.compose([Validators.required])]
    })
  }

}
