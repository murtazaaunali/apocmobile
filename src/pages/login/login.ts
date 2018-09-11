import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav, AlertController } from 'ionic-angular';

import { SidemenuPage } from './../sidemenu/sidemenu';

import { AuthProvider } from './../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild(Nav) nav: Nav;
  user = {
    name: 'Akili Cooper',
    pin: '1234'
  };
  constructor(public navCtrl: NavController, public authProvider: AuthProvider, public alertCtrl: AlertController) { }

  loginUser() {
    this.authProvider.login(this.user.name, this.user.pin).then(success => {
      if (success) {
        this.navCtrl.setRoot('SidemenuPage');
      } else {
        let alert = this.alertCtrl.create({
          title: 'Login failed',
          message: 'Please check your credentials',
          buttons: ['OK']
        });
        alert.present();
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
