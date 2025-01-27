import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {MenuPage} from "../menu/menu";
import {ProfilePage} from "../profile/profile";
import {TicketsPage} from "../tickets/tickets";
import {ToursPage} from "../tours/tours";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  type = "leave";
  fromCity;

  constructor(public navCtrl: NavController) {

  }

  onGoBack() {
    this.navCtrl.setRoot(LoginPage);
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

  openTours() {
    this.navCtrl.push(ToursPage);
  }

}
