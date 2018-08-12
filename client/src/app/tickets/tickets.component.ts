import { Component, HostBinding, OnInit } from '@angular/core';
import { routeFadeStateTrigger } from '../animations/route-animations';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
  animations: [
    routeFadeStateTrigger
  ]
})
export class TicketsComponent implements OnInit {
  // binding the animation to the component
  @HostBinding('@routeFadeState') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
