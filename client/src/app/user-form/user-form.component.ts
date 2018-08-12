import { Component, HostBinding, OnInit } from '@angular/core';
import { routeFadeStateTrigger } from '../animations/route-animations';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  animations: [
    routeFadeStateTrigger
  ]
})
export class UserFormComponent implements OnInit {
    // binding the animation to the component
    @HostBinding('@routeFadeState') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
