import { Component, HostBinding, OnInit } from '@angular/core';
import { routeFadeStateTrigger } from '../animations/route-animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    routeFadeStateTrigger
  ]
})
export class LandingComponent implements OnInit {
  // binding the animation to the component
  @HostBinding('@routeFadeState') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
