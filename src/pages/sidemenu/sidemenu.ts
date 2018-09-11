import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav, App } from 'ionic-angular';
import { AuthProvider } from './../../providers/auth/auth';

import { HomePage } from './../home/home';
import { ActivitiesPage } from "../activities/activities";
import { CalendarPage } from "../calendar/calendar";
import { AccountsPage } from "../accounts/accounts";
import { OpportunitiesPage } from "../opportunities/opportunities";
import { ContactsPage } from "../contacts/contacts";
import { DashboardPage } from "../dashboard/dashboard";

@IonicPage()
@Component({
  selector: 'page-sidemenu',
  templateUrl: 'sidemenu.html',
})
export class SidemenuPage {
  rootPage: any;
  pages = [];
  settings = [];
  username = '';

  // Reference to the side menus root nav
  @ViewChild(Nav) nav: Nav;

  constructor(public navCtrl: NavController, private authProvider: AuthProvider, private appCtrl: App) {
  }

  ionViewWillEnter() {
    if (this.authProvider.isAdmin()) {
      this.pages = [
        { title: 'Dashboard', component: DashboardPage, icon: 'dashboard-icon.png' },
        { title: 'Accounts', component: AccountsPage, icon: 'accounts-icon.png' },
        { title: 'Contacts', component: ContactsPage, icon: 'contacts-icon.png' },
        { title: 'Opportunities', component: OpportunitiesPage, icon: 'opportunities-icon.png' },
        { title: 'Activities', component: ActivitiesPage, icon: 'activities-icon.png' },
        { title: 'Calendar', component: CalendarPage, icon: 'calendar-icon.png' }
      ];
      this.settings = [
        { title: 'Settings', component: DashboardPage, icon: 'settings-icon.png' },
        { title: 'Help', component: AccountsPage, icon: 'help-icon.png' },
        { title: 'Log Out', component: ContactsPage, icon: 'logout-icon.png' }
      ];
      this.openPage(DashboardPage);
    } else {
      this.pages = [
        { title: 'Dashboard', component: DashboardPage, icon: 'dashboard-icon.png' },
        { title: 'Accounts', component: AccountsPage, icon: 'accounts-icon.png' },
        { title: 'Contacts', component: ContactsPage, icon: 'contacts-icon.png' },
        { title: 'Opportunities', component: OpportunitiesPage, icon: 'opportunities-icon.png' },
        { title: 'Activities', component: ActivitiesPage, icon: 'activities-icon.png' },
        { title: 'Calendar', component: CalendarPage, icon: 'calendar-icon.png' }
      ];
      this.settings = [
        { title: 'Settings', component: DashboardPage, icon: 'settings-icon.png' },
        { title: 'Help', component: AccountsPage, icon: 'help-icon.png' },
        { title: 'Log Out', component: ContactsPage, icon: 'logout-icon.png' }
      ];
      this.openPage(DashboardPage);
    }
    this.username = this.authProvider.currentUser.name;
  }

  logout() {
    this.authProvider.logout();
    this.appCtrl.getRootNav().setRoot('LoginPage');
  }

  openPage(page) {
    this.nav.setRoot(page);
  }

  ionViewCanEnter() {
    return this.authProvider.isLoggedIn();
  }

}
