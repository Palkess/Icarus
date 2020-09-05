import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './app/modules/dashboard/dashboard.component';
import { AboutComponent } from './app/modules/about/about.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Dashboard',
      showInMenu: true,
      icon: 'home'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'Om hemsidan',
      showInMenu: true,
      icon: 'info'
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
