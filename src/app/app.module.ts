import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import {SignupPage} from "../pages/signup/signup";
import {MenuPage} from "../pages/menu/menu";
import {ProfilePage} from "../pages/profile/profile";
import {TicketsPage} from "../pages/tickets/tickets";
import {ToursPage} from "../pages/tours/tours";
import {TourReservePage} from "../pages/tour-reserve/tour-reserve";
import {SeatBtn} from "../components/seat-btn/seat-button";
import {ConfirmReservationPage} from "../pages/confirm-reservation/confirm-reservation";
import { PaymentMethodPage } from '../pages/payment-method/payment-method';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    MenuPage,
    ProfilePage,
    TicketsPage,
    ToursPage,
    TourReservePage,
    SeatBtn,
    ConfirmReservationPage,
    PaymentMethodPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    MenuPage,
    ProfilePage,
    TicketsPage,
    ToursPage,
    TourReservePage,
    SeatBtn,
    ConfirmReservationPage,
    PaymentMethodPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
