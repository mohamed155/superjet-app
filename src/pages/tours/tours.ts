import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {MenuPage} from "../menu/menu";
import {ProfilePage} from "../profile/profile";
import {TicketsPage} from "../tickets/tickets";
import {TourReservePage} from "../tour-reserve/tour-reserve";

@Component({
  selector: 'page-tours',
  templateUrl: 'tours.html'
})
export class ToursPage {

  constructor(public navCtrl: NavController) {

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

  openTour(tourClass) {
    this.navCtrl.push(TourReservePage, {tourClass: tourClass});
  }

  openHome() {
    this.navCtrl.popToRoot();
  }

}
