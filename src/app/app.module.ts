import {AlertModule} from 'ngx-bootstrap';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app.component';
import {DieDetailComponent} from './components/die-detail/die-detail.component';
import {DieFaceDetailComponent} from './components/die-face-detail/die-face-detail.component';
import {HeroListComponent} from './components/hero-list/hero-list.component';
import {RoundDetailComponent} from './components/round-detail/round-detail.component';
import {SanctuaryDetailComponent} from "./components/sanctuary-detail/sanctuary-detail.component";
import {TimesPipe} from "./pipes/times.pipe";

@NgModule({
    declarations: [
        AppComponent,
        HeroListComponent,
        DieDetailComponent,
        DieFaceDetailComponent,
        RoundDetailComponent,
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
