import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab = "leave";
  fromCity;

  constructor(public navCtrl: NavController) {

  }

  onGoBack() {
    this.navCtrl.setRoot(LoginPage);
  }

}
