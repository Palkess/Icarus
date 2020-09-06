import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { Feature } from '../models/feature.model';

@Injectable({
  providedIn: 'root'
})
export class MyFeatureService {

  constructor() { }

  //getItems(): Observable<Feature> {
  //  return Observable<>
  //    // https://itnext.io/ngrx-best-practices-for-enterprise-angular-applications-6f00bcdf36d7#f688
  //}
}
