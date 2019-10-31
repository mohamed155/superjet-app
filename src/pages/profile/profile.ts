import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {HomePage} from "../home/home";
import {TicketsPage} from "../tickets/tickets";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController) {

  }

  onGoBack() {
    this.navCtrl.pop();
  }

  logout() {
    this.navCtrl.setRoot(LoginPage);
  }

  openHome() {
    this.navCtrl.popToRoot();
  }

  openTickets() {
    this.navCtrl.push(TicketsPage);
  }

}
