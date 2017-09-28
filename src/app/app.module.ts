import {AlertModule} from 'ngx-bootstrap';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app.component';
import {DieDetailComponent} from './components/die-detail/die-detail.component';
import {DieFaceDetailComponent} from './components/die-face-detail/die-face-detail.component';
import {HeroDetailComponent} from './components/hero-detail/hero-detail.component';
import {ResourcesDetailComponent} from './components/resources-detail/resources-detail.component';
import {SanctuaryDetailComponent} from "./components/sanctuary-detail/sanctuary-detail.component";
import {TimesPipe} from "./pipes/times.pipe";

@NgModule({
    declarations: [
        AppComponent,
        HeroDetailComponent,
        DieDetailComponent,
        DieFaceDetailComponent,
        ResourcesDetailComponent,
        SanctuaryDetailComponent,
        TimesPipe
    ],
    imports: [
        AlertModule.forRoot(),
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
