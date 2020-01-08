import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  readonly authState: BehaviorSubject<boolean> = new BehaviorSubject(false);
  readonly authState$ = this.authState.asObservable();

  constructor() {}

  updateState(state: boolean) {
    this.authState.next(state);
  }
}
