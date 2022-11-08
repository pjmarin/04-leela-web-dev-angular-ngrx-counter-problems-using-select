import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, Subscription } from 'rxjs';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})

// Opcion 1 con subscribe y unsubscribe
// export class CounterOutputComponent implements OnInit, OnDestroy {
//   counter: number = 0;
//   counterSubscription: Subscription = Subscription.EMPTY;
//   counter$: Observable<{counter: number}> = of({counter: 0});
//   constructor(private store: Store<{ counter: CounterState }>) { }

//   ngOnInit(): void {
//     this.counterSubscription = this.store.select("counter").subscribe((data) => {
//       this.counter = data.counter;
//     });

//     this.counter$ = this.store.select("counter");
//   }

//   ngOnDestroy(): void {
//     if(this.counterSubscription) {
//       this.counterSubscription.unsubscribe();
//     }
//   }

// }

// Opicion 2 con async pipe
export class CounterOutputComponent implements OnInit {
  counter: number = 0;
  constructor(private store: Store<{ counter: CounterState }>) { }

  ngOnInit(): void {
    this.store.select("counter").subscribe(data => {
      console.log("pasamos por aqui - counter");
      this.counter = data.counter;
    });
  }

}
