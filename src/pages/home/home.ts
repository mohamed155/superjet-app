import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {MenuPage} from "../menu/menu";

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

}
