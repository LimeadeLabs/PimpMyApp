import { Component } from '@angular/core';
import { trigger, state, style, keyframes, animate, transition, group, query } from '@angular/animations';
// import { query } from '../../node_modules/@angular/core/src/render3/query';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition('1 => 2, 2 => 3', [
          style({ height: '!' }),
          query(':enter', style({ transform: 'translateX(100%)' })),
          query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
          // animate the leave page away
          group([
              query(':leave', [
                  animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)' })),
              ]),
              // and now reveal the enter
              query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
          ]),
      ]),
      transition('3 => 2, 2 => 1', [
          style({ height: '!' }),
          query(':enter', style({ transform: 'translateX(-100%)' })),
          query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
          // animate the leave page away
          group([
              query(':leave', [
                  animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(100%)' })),
              ]),
              // and now reveal the enter
              query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
          ]),
      ]),
  ])

    // large and small animation
    // trigger('fadeInUp', [
    //   state('small', style({
    //     transform: 'scale(1)'
    //   })),
    //   state('small', style({
    //     transform: 'scale(1.2)'
    //   })),
    //   transition('small => large', animate('300ms ease-in')),
    // ]),
  ]
})
export class AppComponent {
  title = 'client';
  state: String = 'small'
  
  // animateMe(){
  //   this.state = (this.state === 'small' ? 'large' : 'small');
  // }

  getDepth(outlet){
    return outlet.activatedRouteData['deph'];
  }

}
