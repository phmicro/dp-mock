import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { FakeAPIService } from 'src/app/fake-api.service';
import { ApiActions } from './index';
 
@Injectable()
export class TableEffects {
 
  loadAPI$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(ApiActions.loadAPI),
        mergeMap(() => this.fakeApi.getfakeData()
            .pipe(
                map(fakeData => {console.log('effect', fakeData); return ApiActions.successAPI({ fakeData })}),
                catchError(() => EMPTY)
                )
            )
        )
    });
 
  constructor(
    private actions$: Actions,
    private fakeApi: FakeAPIService
  ) {}
}