import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { LoginModel } from '../../Models/LoginModel';
import { URLTOKEN } from '../../app/app.urltoken';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
authApi:string="api/Accounts"
endPoint:string ;
  constructor(
    @Inject(URLTOKEN)apiUrl:string,
    public http: HttpClient) {
      this.endPoint=apiUrl+this.authApi;
  }
  
  Login(loginModel:LoginModel){
   return this.http.post(this.endPoint,loginModel,{

    });

  }

  SignOut(){

  }

  Register(){

  }

  ResetPassword(){

  }
}
