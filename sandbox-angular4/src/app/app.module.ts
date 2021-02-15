import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ColorModule } from './modules/color.module';

import { AppComponent } from './app.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { AttributeVsPropertyComponent } from './attribute-vs-property/attribute-vs-property.component';
import { BasicComponentComponent } from './basic-component/basic-component.component';
import { BootstrapSandboxComponent } from './bootstrap-sandbox/bootstrap-sandbox.component';
import { ComposerCountComponent } from './container-and-nested/composer-count/composer-count.component';
import { ComposerListComponent } from './container-and-nested/composer-list/composer-list.component';
import { ContainerAndNestedComponent } from './container-and-nested/container-and-nested.component';
import { CssClassBindingComponent } from './css-class-binding/css-class-binding.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DependencyInjectionOneComponent } from './dependency-injection-one/dependency-injection-one.component';
import { DependencyInjectionTwoComponent } from './dependency-injection-two/dependency-injection-two.component';
import { ServiceDependencyInjectionColorModuleComponent } from './service-di-color-module/service-di-color-module.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { HttpServiceCallerProgrammerListComponent } from './http-service-caller-programmer-list/http-service-caller-programmer-list.component';
import { HttpServiceCallerProgrammerListPromiseComponent } from './http-service-caller-programmer-list-promise/http-service-caller-programmer-list-promise.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { NgforDirectiveComponent } from './ngfor-directive/ngfor-directive.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ObservablesComponent } from './observables/observables.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProgrammerDetailComponent } from './programmer-detail/programmer-detail.component';
import { ProgrammerDetailPromiseComponent } from './programmer-detail-promise/programmer-detail-promise.component';
import { ProgrammerHttpService } from './services/programmer-http.service';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { PipesComponent } from './pipe-use/pipes.component';
import { PlayerComponent } from './ngfor-directive/player/player.component';
import { PlayerListComponent } from './ngfor-directive/player/player-list/player-list.component';
import { RedTextDirective } from './directives/red-text.directive';
import { RoutingExampleProgrammersComponent } from './routing-example-programmers/routing-example-programmers.component';
import { ServiceCallerInventorListComponent } from './service-caller-inventor-list/service-caller-inventor-list.component';
import { TitlePipe } from './pipes/title.pipe';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { UserPreferenceService } from './services/user-preferences.service';

// Nav for routes
import { BindingPagesComponent } from './nav-pages/binding-pages/binding-pages.component';
import { BootstrapPagesComponent } from './nav-pages/bootstrap-pages/bootstrap-pages.component';
import { CssPagesComponent } from './nav-pages/css-pages/css-pages.component';
import { FundamentalsComponent } from './nav-pages/fundamentals/fundamentals.component';
import { InjectionPagesComponent } from './nav-pages/injection-pages/injection-pages.component';
import { LifeCycleHookPagesComponent } from './nav-pages/life-cycle-pages/life-cycle-pages.component';
import { PipePagesComponent } from './nav-pages/pipe-pages/pipe-pages.component';
import { PromisesAndObservablesComponent } from './nav-pages/promises-and-observables/promises-and-observables.component';
import { ServicePagesComponent } from './nav-pages/service-pages/service-pages.component';
import { ProgrammerHttpPromiseService } from './services/programmer-http-promise.service.';

const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'bindingPages', component: BindingPagesComponent },
    { path: 'bootstrapPages', component: BootstrapPagesComponent },
    { path: 'cssPages', component: CssPagesComponent },
    { path: 'serviceDIColorMod', component: ServiceDependencyInjectionColorModuleComponent },
    { path: 'fundamentals', component: FundamentalsComponent },
    { path: 'injectionPages', component: InjectionPagesComponent },
    { path: 'lifeCycleHookPages', component: LifeCycleHookPagesComponent },
    { path: 'pipePages', component: PipePagesComponent },
    { path: 'promisesObservables', component: PromisesAndObservablesComponent },
    { path: 'promisesObservables/:code', component: ProgrammerDetailPromiseComponent },
    { path: 'servicePages', component: ServicePagesComponent },
    { path: 'routingExampleProgrammers', component: RoutingExampleProgrammersComponent },
    { path: 'routingExampleProgrammers/:code', component: ProgrammerDetailComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        ColorModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        AttributeBindingComponent,
        AttributeVsPropertyComponent,
        BasicComponentComponent,
        BootstrapSandboxComponent,
        ComposerCountComponent,
        ComposerListComponent,
        ContainerAndNestedComponent,
        CssClassBindingComponent,
        DashboardComponent,
        DependencyInjectionOneComponent,
        DependencyInjectionTwoComponent,
        ServiceDependencyInjectionColorModuleComponent,
        EventBindingComponent,
        HttpServiceCallerProgrammerListComponent,
        HttpServiceCallerProgrammerListPromiseComponent,
        InterpolationComponent,
        LifecycleHooksComponent,
        NavBarComponent,
        NgforDirectiveComponent,
        ObservablesComponent,
        PageNotFoundComponent,
        PipesComponent,
        PlayerComponent,
        PlayerListComponent,
        ProgrammerDetailComponent,
        ProgrammerDetailPromiseComponent,
        PropertyBindingComponent,
        RedTextDirective,
        RoutingExampleProgrammersComponent,
        ServiceCallerInventorListComponent,
        TitlePipe,
        TwoWayDataBindingComponent,
        BindingPagesComponent,
        BootstrapPagesComponent,
        CssPagesComponent,
        FundamentalsComponent,
        InjectionPagesComponent,
        LifeCycleHookPagesComponent,
        PipePagesComponent,
        PromisesAndObservablesComponent,
        ServicePagesComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        ProgrammerHttpService,
        ProgrammerHttpPromiseService,
        UserPreferenceService
    ]
})
export class AppModule { }
