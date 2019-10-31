import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {MenuPage} from "../menu/menu";
import {ProfilePage} from "../profile/profile";
import {TicketsPage} from "../tickets/tickets";

@Component({
  selector: 'page-confirm-reservation',
  templateUrl: 'confirm-reservation.html'
})
export class ConfirmReservationPage {

  tourClass = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tourClass = this.navParams.get('tourClass');
  }

  onGoBack() {
    this.navCtrl.pop();
  }

  openMenu() {
    this.navCtrl.push(MenuPage);
  }

  openProfile() {
    this.navCtrl.push(ProfilePage);
  }

  openTickets() {
    this.navCtrl.push(TicketsPage);
  }

  openHome() {
    this.navCtrl.popToRoot();
  }

}
