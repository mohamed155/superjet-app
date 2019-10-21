import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SignupPage} from "../signup/signup";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }

  openSignup() {
    this.navCtrl.push(SignupPage);
  }

  onGoHome() {
    this.navCtrl.setRoot(HomePage);
  }

}
