import { Component } from '@angular/core';
import { IonicPage, NavController,ModalController,LoadingController, NavParams } from 'ionic-angular';
import { ContactServiceProvider} from "../../providers/contact-service/contact-service";
import {ContactsFilterModalPage} from "../contacts-filter-modal/contacts-filter-modal";
import {NewContactPage} from "../new-contact/new-contact";


@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {
  contacts: Array<any>;
  search;
  loader;

  constructor(public navCtrl: NavController, public navParams: NavParams, public contactService: ContactServiceProvider,public modalCtrl: ModalController,public loadingCtrl: LoadingController) {
     this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
  }

  /*openContacts(contact) {
    this.navCtrl.push(ContactDetailsPage, contact);
  }*/

  OpenFiltersModal(){
    let filterModal = this.modalCtrl.create(ContactsFilterModalPage, {});
    filterModal.present();
  }

  AddNewContactModal(){
    this.navCtrl.push(NewContactPage);
  }


  ionViewDidLoad() {
      console.log('ionViewDidLoad ContactsPage');

      this.loader.present();
      this.contactService.findAll().then(data => {
      this.contacts = data;
      this.loader.dismiss();
    });
  }

}
