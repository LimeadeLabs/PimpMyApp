import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { TicketsComponent } from './tickets/tickets.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { NavComponent } from './nav/nav.component';

//  ==== ROUTER =======
const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'tickets', component: TicketsComponent},
  { path: 'form', component: UserFormComponent},
  { path: 'checkout', component: CheckoutComponent},

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
    BrowserModule,RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
