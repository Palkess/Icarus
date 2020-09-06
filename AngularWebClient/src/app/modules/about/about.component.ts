import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { RootStoreState, MyFeatureStoreSelectors, MyFeatureStoreActions } from '../../stores';
import { Feature } from '../../data/models/feature.model';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  items$ = this._store$.pipe(select(MyFeatureStoreSelectors.selectAllMyFeatureItems));

  constructor(
    private _store$: Store<RootStoreState.State>
  ) { }

  ngOnInit(): void {
  }

  changeState(items: Feature[]) {

    items.push({
      id: new Date().toUTCString() + Math.random(),
      someDate: new Date().toUTCString(),
      isTrue: true
    });

    console.log("items", items);

    this._store$.dispatch(new MyFeatureStoreActions.LoadSuccessAction({
      items
    }));
  }

}
