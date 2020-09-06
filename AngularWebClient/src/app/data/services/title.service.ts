import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(
    private _title: Title,
    private _translateService: TranslateService
  ) { }

  setTitle(title: string, includeSiteName: boolean = true): void {
    let newTitle = title;

    if (includeSiteName) {
      this._translateService.get("icarus.site.title").subscribe(siteName => {
        this._title.setTitle(`${newTitle} - ${siteName}`);
      });
    } else {
      this._title.setTitle(newTitle);
    }
  }
}
