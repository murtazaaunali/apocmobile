import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { DashboardPage } from './../pages/dashboard/dashboard';
import { AccountsPage } from './../pages/accounts/accounts';
import { ContactsPage } from './../pages/contacts/contacts';
import { OpportunitiesPage } from './../pages/opportunities/opportunities';
import { ActivitiesPage } from './../pages/activities/activities';
import { CalendarPage } from './../pages/calendar/calendar';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'LoginPage';

  pages: any = [
    { title: 'Dashboard', component: DashboardPage, icon: 'dashboard-icon.png' },
    { title: 'Accounts', component: AccountsPage, icon: 'accounts-icon.png' },
    { title: 'Contacts', component: ContactsPage, icon: 'contacts-icon.png' },
    { title: 'Opportunities', component: OpportunitiesPage, icon: 'opportunities-icon.png' },
    { title: 'Activities', component: ActivitiesPage, icon: 'activities-icon.png' },
    { title: 'Calendar', component: CalendarPage, icon: 'calendar-icon.png' }
  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

