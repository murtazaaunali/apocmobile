import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { AccountsPage } from '../pages/accounts/accounts';
import { ContactsPage } from '../pages/contacts/contacts';
import { OpportunitiesPage } from '../pages/opportunities/opportunities';
import { ActivitiesPage } from '../pages/activities/activities';
import { CalendarPage } from '../pages/calendar/calendar';

import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    AccountsPage,
    ContactsPage,
    OpportunitiesPage,
    ActivitiesPage,
    CalendarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    AccountsPage,
    ContactsPage,
    OpportunitiesPage,
    ActivitiesPage,
    CalendarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider
  ]
})
export class AppModule { }
