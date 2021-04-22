import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActionWatcher {
  constructor(private readonly actions: Actions) {}

  watch<T = any>(...args: string[]): Observable<T> {
    let watch$: Observable<T>;
    switch (args.length) {
      case 1:
        watch$ = this.actions.pipe(ofType(args[0]));
        break;
      case 2:
        watch$ = this.actions.pipe(ofType(args[0], args[1]));
        break;
      case 3:
        watch$ = this.actions.pipe(ofType(args[0], args[1], args[2]));
        break;
      case 4:
        watch$ = this.actions.pipe(ofType(args[0], args[1], args[2], args[3]));
        break;
      case 5:
      default:
        watch$ = this.actions.pipe(ofType(args[0], args[1], args[2], args[3], args[4]));
    }

    return watch$;
  }
}
