import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UfmModule} from "./ufm/ufm.module";
import { MonitoringComponent } from './monitoring/monitoring.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
    declarations: [
        AppComponent,
        MonitoringComponent,
        SettingsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        UfmModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}



