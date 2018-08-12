import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { TicketsComponent } from './tickets/tickets.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NavComponent } from './nav/nav.component';

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
  exports: [ RouterModule ],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: []
})
export class AppRoutingModule { }
