import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactServiceProvider} from "../../providers/contact-service/contact-service";

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {
  contacts: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public contactService: ContactServiceProvider) {
    this.contactService.findAll().then(data => this.contacts = data);
  }

  /*openContacts(contact) {
    this.navCtrl.push(ContactDetailsPage, contact);
  }*/


  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsPage');
  }

}
