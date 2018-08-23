import { Component, HostBinding, OnInit } from '@angular/core';
import { routeFadeStateTrigger } from '../animations/route-animations';
// import { environment } from '../environments/environment';

import { PaymentService } from '../services/payment.service';
// import {Observable, Subscriber} from 'rxjs';
// import { StripePubKey } from './interface/stripeKeyInterface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  animations: [
    routeFadeStateTrigger
  ],
  providers: [PaymentService]
})
export class CheckoutComponent implements OnInit {
  // binding the animation to the component
  @HostBinding('@routeFadeState') routeAnimation = true;

  // declare var StripeCheckout:any;
  stripePubKey: string;
  name: string;
  billAdress: string;
  state: string;
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
  StripeCheckout;


  constructor(private _charge: PaymentService) { }


  ngOnInit() {

    // running getKey function from service
    console.log("initializing the service function");
    this._charge.getKey();

    // this.stripePubKey = this._charge.PubKey;
  }

  extractkey(){
    // settng variable for Stripe Pub key
    this.stripePubKey = this._charge.PubKey;
    // configuring custom Stripe form
    const handler = this.StripeCheckout.congifure({
      key: this.stripePubKey,
      image: "",
      locale: 'auto',
      token: function(token) {
      }
    })
  }



  onCheckout(){
    const paymentInfo = {
      name: this.name,
      billAdress: this.billAdress,
      state: this.state,
      cardNumber: this.cardNumber,
      expiryMonth: this.expiryMonth,
      expiryYear: this.expiryYear,
      cvc: this.cvc


    }




  }



}




