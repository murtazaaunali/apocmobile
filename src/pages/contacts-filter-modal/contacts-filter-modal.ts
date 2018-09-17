import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ContactServiceProvider} from "../../providers/contact-service/contact-service";

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
  SearchContacts;
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public contactService: ContactServiceProvider) {
    this.SearchContacts =  this.navParams.get("searchContacts");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsFilterModalPage');
  }

  closeModal() {
    this.navCtrl.pop();
  }

  IsEmptyObject(o) {
    return Object.keys(o).every(function(x) {
      return o[x]===''||o[x]===null;  // or just "return o[x];" for falsy values
    });
  }


  FilterContact(){
    if(this.IsEmptyObject(this.filter)){
      console.log("all empty");
      let alert = this.alertCtrl.create({
        title: 'Warning',
        message: 'Please type on any field to search specific contact',
        buttons: ['OK']
      });
      alert.present();

    }
    else{
      this.closeModal();
      this.SearchContacts(this.filter);
    }

  }
}
