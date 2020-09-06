import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd, RoutesRecognized, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { TitleService } from './app/data/services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private _translateService: TranslateService,
    private _router: Router,
    private _titleService: TitleService,
    private _activatedRoute: ActivatedRoute, 
  ) {
    _translateService.addLangs(['sv_default']);
    _translateService.setDefaultLang('sv_default');
  }

  ngOnInit() {
    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
      const rt = this.getChild(this._activatedRoute);
      rt.data.subscribe(data => {
        this._titleService.setTitle(data.title)
      });
    });  
  }

  getChild(activatedRoute: ActivatedRoute) {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  } 

}
