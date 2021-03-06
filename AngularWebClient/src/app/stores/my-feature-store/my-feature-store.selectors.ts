import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { featureAdapter, State } from './my-feature-store.state';
import { Feature } from '../../data/models/feature.model';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectMyFeatureState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('myFeature');

export const selectAllMyFeatureItems: (
  state: object
) => Feature[] = featureAdapter.getSelectors(selectMyFeatureState).selectAll;

export const selectMyFeatureById = (id: string) =>
  createSelector(this.selectAllMyFeatureItems, (allMyFeatures: Feature[]) => {
    if (allMyFeatures) {
      return allMyFeatures.find(p => p.id === id);
    } else {
      return null;
    }
  });

export const selectMyFeatureError: MemoizedSelector<object, any> = createSelector(
  selectMyFeatureState,
  getError
);

export const selectMyFeatureIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(selectMyFeatureState, getIsLoading);
