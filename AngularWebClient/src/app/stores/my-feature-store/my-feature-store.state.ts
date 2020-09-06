import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Feature } from '../../data/models/feature.model';

export const featureAdapter: EntityAdapter<
  Feature
  > = createEntityAdapter<Feature>({
  selectId: model => model.id,
    sortComparer: (a: Feature, b: Feature): number =>
    b.someDate.toString().localeCompare(a.someDate.toString())
});

export interface State extends EntityState<Feature> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState(
  {
    isLoading: false,
    error: null
  }
);
