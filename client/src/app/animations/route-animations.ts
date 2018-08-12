import { trigger, transition, style, animate } from "@angular/animations";

export const routeFadeStateTrigger = trigger('routeFadeState', [
    // onEnter animation
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate(400)
    ]),

    transition(':leave', [
        style({
            opacity: 0
        }),
        animate(400)
    ])
])