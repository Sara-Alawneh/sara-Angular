import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UfmRoutes} from "./ufm/ufm.routes";
import { SettingsComponent } from './settings/settings.component';
import { MonitoringComponent } from './monitoring/monitoring.component';

const routes:Routes = [
  {  path: 'settings-component', component: SettingsComponent },
  { path: 'monitoring-component', component: MonitoringComponent },
  ...UfmRoutes,
  {
    path: '**',
    redirectTo: 'ufm'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




