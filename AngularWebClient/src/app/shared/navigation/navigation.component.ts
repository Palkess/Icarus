import { Component, OnInit } from '@angular/core';
import { Router, Route, Routes } from '@angular/router';

export class NavigationLink {
  path: string;
  name: string;
  icon?: string;
  children?: NavigationLink[]; 
}


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  menuLinks: NavigationLink[] = [];

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.menuLinks = this.getpaths('', this.router.config);
  }

  getpaths(parent: String, config: Route[]): NavigationLink[] {
    let result: NavigationLink[] = [];

    for (let i = 0; i < config.length; i++) {
      const route = config[i];

      if (!!route.data && !!route.data.title && route.data.showInMenu) {
        let foundPath: NavigationLink = {
          path: `${parent}/${route.path}`,
          name: route.data.title
        };

        if (!!route.data.icon) {
          foundPath.icon = route.data.icon;
        }

        if (route.children) {
          const currentPath = route.path ? parent + '/' + route.path : parent;
          foundPath.children = this.getpaths(currentPath, route.children);
        }

        result.push(foundPath);
      }
    }

    return result;
  }

}
