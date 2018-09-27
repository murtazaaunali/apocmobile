import { Component } from '@angular/core';
import { IonicPage, NavController,ModalController,LoadingController, NavParams } from 'ionic-angular';
import { ContactServiceProvider} from "../../providers/contact-service/contact-service";
import {ContactsFilterModalPage} from "../contacts-filter-modal/contacts-filter-modal";
import {NewContactPage} from "../new-contact/new-contact";
import { NamefilterPipe } from '../../pipes/namefilter/namefilter';
import 'rxjs';

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
  providers: [NamefilterPipe]
})
export class ContactsPage{
  contacts: any;
  searchFilter='';
  loader;
  rows;
  temp=[];
  columns;
  mode='table';

  constructor(public navCtrl: NavController, public navParams: NavParams, public contactService: ContactServiceProvider,public modalCtrl: ModalController,public loadingCtrl: LoadingController,public filterCtrl:NamefilterPipe) {
     this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.mode='table';

  }

  /*openContacts(contact) {
    this.navCtrl.push(ContactDetailsPage, contact);
  }*/

  OpenFiltersModal(){
    let filterModal = this.modalCtrl.create(ContactsFilterModalPage, {searchContacts:this.SearchContact.bind(this)});
    filterModal.present();
  }

  AddNewContactModal(){
    this.navCtrl.push(NewContactPage);
  }


  FilterTableRows(event){
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;

  }

  SearchContact(filters){
    console.log(filters);
    this.loader.present();

    this.contactService.searchFilteredContacts(filters,this.contacts).then(data => {
      this.contacts = data;
      this.loader.dismiss();
    });
  }


  ionViewDidLoad() {
      console.log('ionViewDidLoad ContactsPage');
      this.loader.present();
      this.contactService.findAllContacts().then(data => {
      this.contacts = data;
      this.rows=this.contacts;
      this.temp=this.rows;

      this.loader.dismiss();
    });
  }

}
