import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private _translateService: TranslateService,
    private _router: Router
  ) {
    _translateService.addLangs(['sv_default']);
    _translateService.setDefaultLang('sv_default');
  }

  ngOnInit() {
    // TODO Lägg till när ngrx är inlagt för att använda filter
    //this.router.events
    //  .pipe(
    //    filter((event) => event instanceof NavigationEnd)
    //    map(() => this.router)
    //  )
    //  .subscribe((event) => {
    //    const title = this.getTitle(this.router.routerState, this.router.routerState.root).join(' | ');
    //    this.titleService.setTitle(title);
    //  }
    //  );
  }
}
