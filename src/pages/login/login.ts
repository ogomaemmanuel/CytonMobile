import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginModel } from '../../Models/LoginModel';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {

  userLoginFormGroup: FormGroup;
  constructor(
     private storage:Storage,
     public navCtrl: NavController,
     private formBuilder: FormBuilder,
     private auth:AuthProvider,
     private alertController:AlertController,
     public navParams: NavParams) {
  }
  ngOnInit(): void {
    this.userLoginFormGroup = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required,Validators.minLength(7)])],
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    let user: LoginModel = this.userLoginFormGroup.value;
    this.auth.Login(user).subscribe(resp=>{
      console.log(JSON.stringify(resp));
      this.storage.set("loggedInUserDetails",JSON.stringify( resp)).then(()=>{
        this.navCtrl.setRoot("HomePage",{loggedInUser:resp["email"]});
      })

    },error=>{
      if(error.error["InvalidLogin"][0]){
        let alert= this.alertController.create({
          message:error.error["InvalidLogin"][0],
          title:"Login Error",
          buttons:["ok"]
        })
        alert.present();
         
      }
console.log("Login Page, Error During Login",error.error["InvalidLogin"][0]);
    });

  }

}
