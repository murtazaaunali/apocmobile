import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Nav, AlertController } from 'ionic-angular';

import { AuthProvider } from './../../providers/auth/auth';
// ForceJS Plugin
import { OAuth, DataService } from 'forcejs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;
  user = {
    name: 'admin',
    pw: 'admin'
  };
  constructor(public navCtrl: NavController, public authProvider: AuthProvider, public alertCtrl: AlertController) {
    //this.loadUsers()
  }

  loadUsers() {
    let oauth = OAuth.createInstance();
    oauth.login()
      .then(oauthResult => {
        let service = DataService.createInstance(oauthResult);
        service.query('SELECT Id, Name FROM User LIMIT 10')
          .then(response => {
            //this.users = response.records;
          });
      });
  }
}
