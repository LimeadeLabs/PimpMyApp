import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { TicketsComponent } from './tickets/tickets.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NavComponent } from './nav/nav.component';

// importing Services
import { PaymentService } from './services/payment.service'

// importing animation component
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// importing font-awesome
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { fromEventPattern } from '../../node_modules/rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TicketsComponent,
    UserFormComponent,
    CheckoutComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PaymentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
