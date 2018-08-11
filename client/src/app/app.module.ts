import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { TicketsComponent } from './tickets/tickets.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NavComponent } from './nav/nav.component';
// importing animation component
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



//  ==== ROUTER =======
const appRoutes: Routes = [
  { path: '', component: LandingComponent, data: {depth: 1}},
  { path: 'tickets', component: TicketsComponent, data: {depth: 2}},
  { path: 'form', component: UserFormComponent, data: {depth: 3}},
  { path: 'checkout', component: CheckoutComponent, data: {depth: 4}},

  //  home default path
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }

];

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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
