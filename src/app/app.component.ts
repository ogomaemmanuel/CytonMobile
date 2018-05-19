import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  pageSettings: Array<{ title: string, page: any }>;
  rootPage:any = "TripRequestPage";
  @ViewChild(Nav) nav: Nav;
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    public menuCtrl: MenuController,
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.pageSettings = [
        { title: 'Payments', page: 'PaymentPage'},
        { title: 'Your Trips', page: 'TripHistoryPage' },
        { title: 'Help', page: 'HelpPage' },
      ];
    });
  }
  openPage(pageSetting) {
    this.menuCtrl.close();
    if (pageSetting.page == 'HomePage'|| pageSetting.page == 'LoginPage') {
      this.nav.setRoot(pageSetting.page);
    }
    else
      this.nav.push(pageSetting.page);
  }
}

