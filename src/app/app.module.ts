import {AlertModule} from 'ngx-bootstrap';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app.component';
import {ApplyDieFaceEffectsStepComponent} from "./components/steps/apply-die-face-effects-step/apply-die-face-effects-step.component";
import {CallForReinforcementsStepComponent} from "./components/steps/call-for-reinforcements-step/call-for-reinforcements-step.component";
import {DieDetailComponent} from './components/die-detail/die-detail.component';
import {DieFaceDetailComponent} from './components/die-face-detail/die-face-detail.component';
import {HeroListComponent} from './components/hero-list/hero-list.component';
import {IslandsDetailComponent} from "./components/islands-detail/islands-detail.component";
import {MakeOfferingToGodsStepComponent} from "./components/steps/make-offering-to-gods-step/make-offering-to-gods-step.component";
import {PerformHeroicFeatStepComponent} from "./components/steps/perform-heroic-feat-step/perform-heroic-feat-step.component";
import {PortalDetailComponent} from "./components/portal-detail/portal-detail.component";
import {ReceiveDivineBlessingsStepComponent} from "./components/steps/receive-divine-blessings-step/receive-divine-blessings-step.component";
import {RollAllHeroesDiceStepComponent} from "./components/steps/roll-all-heroes-dice-step/roll-all-heroes-dice-step.component";
import {RollHeroBothDiceStepComponent} from "./components/steps/roll-hero-both-dice-step/roll-hero-both-dice-step.component";
import {RollSingleDieStepComponent} from "./components/steps/roll-single-die-step/roll-single-die-step.component";
import {RoundDetailComponent} from './components/round-detail/round-detail.component';
import {SanctuaryDetailComponent} from "./components/sanctuary-detail/sanctuary-detail.component";
import {SelectActionToPerformStepComponent} from "./components/steps/select-action-to-perform-step/select-action-to-perform-step.component";
import {SelectExtraActionToPerformStepComponent} from "./components/steps/select-extra-action-to-perform-step/select-extra-action-to-perform-step.component";
import {TimesPipe} from "./pipes/times.pipe";
import {HeroicFeatDetailComponent} from "./components/heroic-feat-detail/heroic-feat-detail.component";
import {SlotDetailComponent} from "./components/slot-detail/slot-detail.component";
import {ReceiveDivineBlessingStepComponent} from "./components/steps/receive-divine-blessing-step/receive-divine-blessing-step.component";
import {Hf03StepComponent} from "./components/steps/heroic-feats/hf03-step/hf03-step.component";

@NgModule({
    declarations: [
        AppComponent,
        ApplyDieFaceEffectsStepComponent,
        CallForReinforcementsStepComponent,
        DieDetailComponent,
        DieFaceDetailComponent,
        HeroicFeatDetailComponent,
        HeroListComponent,
        Hf03StepComponent,
        IslandsDetailComponent,
        MakeOfferingToGodsStepComponent,
        PerformHeroicFeatStepComponent,
        PortalDetailComponent,
        ReceiveDivineBlessingStepComponent,
        ReceiveDivineBlessingsStepComponent,
        RollAllHeroesDiceStepComponent,
        RollAllHeroesDiceStepComponent,
        RollHeroBothDiceStepComponent,
        RollSingleDieStepComponent,
        RoundDetailComponent,
        SanctuaryDetailComponent,
        SelectActionToPerformStepComponent,
        SelectExtraActionToPerformStepComponent,
        SlotDetailComponent,
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
