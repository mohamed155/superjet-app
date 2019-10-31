import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {MenuPage} from "../menu/menu";
import {ProfilePage} from "../profile/profile";
import {TicketsPage} from "../tickets/tickets";
import {ConfirmReservationPage} from "../confirm-reservation/confirm-reservation";

@Component({
  selector: 'page-tour-reserve',
  templateUrl: 'tour-reserve.html'
})
export class TourReservePage {

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

  confirmReservation(tourClass) {
    this.navCtrl.push(ConfirmReservationPage, {tourClass});
  }

  openHome() {
    this.navCtrl.popToRoot();
  }

}
