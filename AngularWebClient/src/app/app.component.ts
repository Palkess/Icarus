import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularWebClient';

  constructor(
    private _translateService: TranslateService
  ) {
    _translateService.addLangs(['sv_default']);
    _translateService.setDefaultLang('sv_default');
  }
}
