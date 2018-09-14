import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactsFilterModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts-filter-modal',
  templateUrl: 'contacts-filter-modal.html',
})
export class ContactsFilterModalPage {

  filter={
    firstName:'',
    lastName:'',
    jobTitle:'',
    department:'',
    phone:'',
    mobile:'',
    email:'',
    accountName:''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsFilterModalPage');
  }

  closeModal() {
    this.navCtrl.pop();
  }

  FilterContact(){
    console.log(this.filter);
  }
}
