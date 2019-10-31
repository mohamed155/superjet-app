import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProfilePage} from "../profile/profile";

@Component({
  selector: 'page-tickets',
  templateUrl: 'tickets.html'
})
export class TicketsPage {

  constructor(public navCtrl: NavController) {

  }

  onGoBack() {
    this.navCtrl.pop();
  }

  openHome() {
    this.navCtrl.popToRoot();
  }

  openTickets() {
    this.navCtrl.push(TicketsPage);
  }

  openProfile() {
    this.navCtrl.push(ProfilePage);
  }
}
