import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { MyFeatureService } from '../../data/services/my-feature.service';
import * as featureActions from './my-feature-store.actions';
import { TitleService } from '../../data/services/title.service';

@Injectable()
export class MyFeatureStoreEffects {
  constructor(private titleService: TitleService, private actions$: Actions) { }

  //@Effect()
  //loadRequestEffect$: Observable<Action> = this.actions$.pipe(
  //  ofType<featureActions.LoadRequestAction>(
  //    featureActions.ActionTypes.LOAD_REQUEST
  //  ),
  //  startWith(new featureActions.LoadRequestAction()),
  //  switchMap(action =>
  //    this.dataService
  //      .getItems()
  //      .pipe(
  //        map(
  //          items =>
  //            new featureActions.LoadSuccessAction({
  //              items
  //            })
  //        ),
  //        catchError(error =>
  //          observableOf(new featureActions.LoadFailureAction({ error }))
  //        )
  //      )
  //  )
  //);
}
