import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactsFilterModalPage } from './contacts-filter-modal';

@NgModule({
  declarations: [
    ContactsFilterModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactsFilterModalPage),
  ],
})
export class ContactsFilterModalPageModule {}
