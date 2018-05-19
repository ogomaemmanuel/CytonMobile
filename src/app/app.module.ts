import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { AuthProvider } from '../providers/auth/auth';
import { URLTOKEN } from './app.urltoken';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { MapProvider } from '../providers/map/map';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({

      apiKey: "AIzaSyCnahpwY4LRTYlzEHnER3B_Y8NR1HzmrVE",

      libraries: ["places"]

  })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    {provide:URLTOKEN,useValue:"http://localhost:49239/"},
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    MapProvider
  ]
})
export class AppModule {}
