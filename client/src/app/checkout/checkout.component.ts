import { Component, HostBinding, OnInit } from '@angular/core';
import { routeFadeStateTrigger } from '../animations/route-animations';
// import { environment } from '../environments/environment';

import { PaymentService } from '../services/payment.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  animations: [
    routeFadeStateTrigger
  ]
})
export class CheckoutComponent implements OnInit {
  // binding the animation to the component
  @HostBinding('@routeFadeState') routeAnimation = true;

  // declare var StripeCheckout:any;
  stripePubKey: any;
  name: string;
  billAdress: string;
  state: string;
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;


  constructor(private charge: PaymentService) { }

  ngOnInit() {
    // running getKey function from service
    this.charge.getKey().subscribe(
      res => this.stripePubKey = res
      // console.log(this.stripePubKey)
    )
    console.log(this.stripePubKey);
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
