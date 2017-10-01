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
import {RollSingleDieStepComponent} from "./components/steps/roll-single-die-step/roll-single-die-step.component";
import {ReceiveDivineBlessingsStepComponent} from "./components/steps/receive-divine-blessings-step/receive-divine-blessings-step.component";
import {RollAllHeroesDiceStepComponent} from "./components/steps/roll-all-heroes-dice-step/roll-all-heroes-dice-step.component";
import {RollHeroBothDiceStepComponent} from "./components/steps/roll-both-hero-dice-step/roll-hero-both-dice-step.component";
import {ApplyDieFaceEffectsStepComponent} from "./components/steps/apply-die-face-effects-step/apply-die-face-effects-step.component";
import {CallForReinforcementsStepComponent} from "./components/steps/call-for-reinforcements-step/call-for-reinforcements-step.component";

@NgModule({
    declarations: [
        AppComponent,
        CallForReinforcementsStepComponent,
        ReceiveDivineBlessingsStepComponent,
        ApplyDieFaceEffectsStepComponent,
        RollAllHeroesDiceStepComponent,
        RollHeroBothDiceStepComponent,
        HeroListComponent,
        DieDetailComponent,
        DieFaceDetailComponent,
        RollSingleDieStepComponent,
        RoundDetailComponent,
        SanctuaryDetailComponent,
        RollAllHeroesDiceStepComponent,
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
