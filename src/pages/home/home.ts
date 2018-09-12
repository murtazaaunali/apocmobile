import { Component, ViewChild } from '@angular/core';
import { NavController, Nav, AlertController } from 'ionic-angular';

import { AuthProvider } from './../../providers/auth/auth';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public authProvider: AuthProvider, public alertCtrl: AlertController) {
    //this.loadUsers()
  }
}
