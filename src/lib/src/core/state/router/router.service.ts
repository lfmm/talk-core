import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

import { Store } from '@ngrx/store';
import { NavigationExtras, Router } from '@angular/router';

import * as RouterActions from './router.actions';
import { RouterState, getRouterStateUrl } from './router.state';


@Injectable()
export class RouterService {

constructor(private _store: Store<RouterState>, private _router: Router, private _location: Location) {
  // this._store.select(getRouterStateUrl).subscribe((s) => {
  //   // verify if current root differs from state, if so, navigate
  // });
}

public start = () => {
  // verify from store if there is any route in cache, if any, go for it
  this._store.select(getRouterStateUrl).take(1).subscribe((s) => {
    if (s && s.url) {
      this._router.navigate([s.url], s.queryParams);
    }
  });
}

public go = (path: any[], query?: object, extras?: NavigationExtras) => {
  this._store.dispatch(new RouterActions.Go({
    path: path, query: query, extras: extras
  }));
}

public back = () => {
  this._store.dispatch(new RouterActions.Back());
}

public forward = () => {
  this._store.dispatch(new RouterActions.Forward());
}

}
