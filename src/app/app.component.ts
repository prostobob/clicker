import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { login, addClick, gameState, resetCounter } from './store/actions';
import { Observable, interval, Subject } from 'rxjs';
import * as fromSelectors from './store/selectors';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name: string;
  name$: Observable<string>;
  startGame$: Observable<boolean>;
  counter$: Observable<number>;
  stop$ = new Subject<boolean>();

  constructor(private store$: Store<fromSelectors.AppState>) {
    this.name$ = this.store$.pipe(select(fromSelectors.selectName));
    this.startGame$ = this.store$.pipe(select(fromSelectors.selectStateGame));
    this.counter$ = this.store$.pipe(select(fromSelectors.selectCounter));
  }

  ngOnInit() {}

  timerGame() {
    this.stop$.next(false);
    const source = interval(1000).pipe(takeUntil(this.stop$));
    source.subscribe(data => {
      console.log(data);
      if (data >= 10) {
        this.stopGame();
      }
    });
  }

  stopGame() {
    this.stop$.next(true);
    this.store$.dispatch(gameState({ start: false }));
  }

  addUser() {
    this.store$.dispatch(login({ name: this.name }));
  }

  start() {
    this.reset();
    this.store$.dispatch(gameState({ start: true }));
    this.timerGame();
  }

  addClick() {
    this.store$.dispatch(addClick());
  }

  reset() {
    this.store$.dispatch(resetCounter());
  }
}
