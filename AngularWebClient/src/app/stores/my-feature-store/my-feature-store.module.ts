import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { featureReducer } from './my-feature-store.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MyFeatureStoreEffects } from './my-feature-store.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('myFeature', featureReducer),
    EffectsModule.forFeature([MyFeatureStoreEffects])
  ],
  providers: [MyFeatureStoreEffects]
})
export class MyFeatureStoreModule { }
