import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Pipe, PipeTransform } from '@angular/core';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { AccountsPage } from '../pages/accounts/accounts';
import { ContactsPage } from '../pages/contacts/contacts';
import { OpportunitiesPage } from '../pages/opportunities/opportunities';
import { ActivitiesPage } from '../pages/activities/activities';
import { CalendarPage } from '../pages/calendar/calendar';

import { AuthProvider } from '../providers/auth/auth';
import { ContactServiceProvider } from '../providers/contact-service/contact-service';
import {ContactsFilterModalPage} from "../pages/contacts-filter-modal/contacts-filter-modal";
import {NewContactPage} from "../pages/new-contact/new-contact";
import { NamefilterPipe } from '../pipes/namefilter/namefilter';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2CompleterModule } from "ng2-completer";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    AccountsPage,
    ContactsPage,
    OpportunitiesPage,
    ActivitiesPage,
    CalendarPage,
    ContactsFilterModalPage,
    NewContactPage,
    NamefilterPipe
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    Ng2SmartTableModule,
    Ng2CompleterModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  exports:[NamefilterPipe],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    AccountsPage,
    ContactsPage,
    OpportunitiesPage,
    ActivitiesPage,
    CalendarPage,
    ContactsFilterModalPage,
    NewContactPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    NamefilterPipe,
    ContactServiceProvider
  ],
})
export class AppModule { }
