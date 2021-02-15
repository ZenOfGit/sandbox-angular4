"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var color_module_1 = require("./modules/color.module");
var app_component_1 = require("./app.component");
var attribute_binding_component_1 = require("./attribute-binding/attribute-binding.component");
var attribute_vs_property_component_1 = require("./attribute-vs-property/attribute-vs-property.component");
var basic_component_component_1 = require("./basic-component/basic-component.component");
var bootstrap_sandbox_component_1 = require("./bootstrap-sandbox/bootstrap-sandbox.component");
var composer_count_component_1 = require("./container-and-nested/composer-count/composer-count.component");
var composer_list_component_1 = require("./container-and-nested/composer-list/composer-list.component");
var container_and_nested_component_1 = require("./container-and-nested/container-and-nested.component");
var css_class_binding_component_1 = require("./css-class-binding/css-class-binding.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var dependency_injection_one_component_1 = require("./dependency-injection-one/dependency-injection-one.component");
var dependency_injection_two_component_1 = require("./dependency-injection-two/dependency-injection-two.component");
var service_di_color_module_component_1 = require("./service-di-color-module/service-di-color-module.component");
var event_binding_component_1 = require("./event-binding/event-binding.component");
var http_service_caller_programmer_list_component_1 = require("./http-service-caller-programmer-list/http-service-caller-programmer-list.component");
var http_service_caller_programmer_list_promise_component_1 = require("./http-service-caller-programmer-list-promise/http-service-caller-programmer-list-promise.component");
var interpolation_component_1 = require("./interpolation/interpolation.component");
var lifecycle_hooks_component_1 = require("./lifecycle-hooks/lifecycle-hooks.component");
var ngfor_directive_component_1 = require("./ngfor-directive/ngfor-directive.component");
var nav_bar_component_1 = require("./nav-bar/nav-bar.component");
var observables_component_1 = require("./observables/observables.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var programmer_detail_component_1 = require("./programmer-detail/programmer-detail.component");
var programmer_detail_promise_component_1 = require("./programmer-detail-promise/programmer-detail-promise.component");
var programmer_http_service_1 = require("./services/programmer-http.service");
var property_binding_component_1 = require("./property-binding/property-binding.component");
var pipes_component_1 = require("./pipe-use/pipes.component");
var player_component_1 = require("./ngfor-directive/player/player.component");
var player_list_component_1 = require("./ngfor-directive/player/player-list/player-list.component");
var red_text_directive_1 = require("./directives/red-text.directive");
var routing_example_programmers_component_1 = require("./routing-example-programmers/routing-example-programmers.component");
var service_caller_inventor_list_component_1 = require("./service-caller-inventor-list/service-caller-inventor-list.component");
var title_pipe_1 = require("./pipes/title.pipe");
var two_way_data_binding_component_1 = require("./two-way-data-binding/two-way-data-binding.component");
var user_preferences_service_1 = require("./services/user-preferences.service");
// Nav for routes
var binding_pages_component_1 = require("./nav-pages/binding-pages/binding-pages.component");
var bootstrap_pages_component_1 = require("./nav-pages/bootstrap-pages/bootstrap-pages.component");
var css_pages_component_1 = require("./nav-pages/css-pages/css-pages.component");
var fundamentals_component_1 = require("./nav-pages/fundamentals/fundamentals.component");
var injection_pages_component_1 = require("./nav-pages/injection-pages/injection-pages.component");
var life_cycle_pages_component_1 = require("./nav-pages/life-cycle-pages/life-cycle-pages.component");
var pipe_pages_component_1 = require("./nav-pages/pipe-pages/pipe-pages.component");
var promises_and_observables_component_1 = require("./nav-pages/promises-and-observables/promises-and-observables.component");
var service_pages_component_1 = require("./nav-pages/service-pages/service-pages.component");
var programmer_http_promise_service_1 = require("./services/programmer-http-promise.service.");
var appRoutes = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'bindingPages', component: binding_pages_component_1.BindingPagesComponent },
    { path: 'bootstrapPages', component: bootstrap_pages_component_1.BootstrapPagesComponent },
    { path: 'cssPages', component: css_pages_component_1.CssPagesComponent },
    { path: 'serviceDIColorMod', component: service_di_color_module_component_1.ServiceDependencyInjectionColorModuleComponent },
    { path: 'fundamentals', component: fundamentals_component_1.FundamentalsComponent },
    { path: 'injectionPages', component: injection_pages_component_1.InjectionPagesComponent },
    { path: 'lifeCycleHookPages', component: life_cycle_pages_component_1.LifeCycleHookPagesComponent },
    { path: 'pipePages', component: pipe_pages_component_1.PipePagesComponent },
    { path: 'promisesObservables', component: promises_and_observables_component_1.PromisesAndObservablesComponent },
    { path: 'promisesObservables/:code', component: programmer_detail_promise_component_1.ProgrammerDetailPromiseComponent },
    { path: 'servicePages', component: service_pages_component_1.ServicePagesComponent },
    { path: 'routingExampleProgrammers', component: routing_example_programmers_component_1.RoutingExampleProgrammersComponent },
    { path: 'routingExampleProgrammers/:code', component: programmer_detail_component_1.ProgrammerDetailComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                color_module_1.ColorModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(appRoutes)
            ],
            declarations: [
                app_component_1.AppComponent,
                attribute_binding_component_1.AttributeBindingComponent,
                attribute_vs_property_component_1.AttributeVsPropertyComponent,
                basic_component_component_1.BasicComponentComponent,
                bootstrap_sandbox_component_1.BootstrapSandboxComponent,
                composer_count_component_1.ComposerCountComponent,
                composer_list_component_1.ComposerListComponent,
                container_and_nested_component_1.ContainerAndNestedComponent,
                css_class_binding_component_1.CssClassBindingComponent,
                dashboard_component_1.DashboardComponent,
                dependency_injection_one_component_1.DependencyInjectionOneComponent,
                dependency_injection_two_component_1.DependencyInjectionTwoComponent,
                service_di_color_module_component_1.ServiceDependencyInjectionColorModuleComponent,
                event_binding_component_1.EventBindingComponent,
                http_service_caller_programmer_list_component_1.HttpServiceCallerProgrammerListComponent,
                http_service_caller_programmer_list_promise_component_1.HttpServiceCallerProgrammerListPromiseComponent,
                interpolation_component_1.InterpolationComponent,
                lifecycle_hooks_component_1.LifecycleHooksComponent,
                nav_bar_component_1.NavBarComponent,
                ngfor_directive_component_1.NgforDirectiveComponent,
                observables_component_1.ObservablesComponent,
                page_not_found_component_1.PageNotFoundComponent,
                pipes_component_1.PipesComponent,
                player_component_1.PlayerComponent,
                player_list_component_1.PlayerListComponent,
                programmer_detail_component_1.ProgrammerDetailComponent,
                programmer_detail_promise_component_1.ProgrammerDetailPromiseComponent,
                property_binding_component_1.PropertyBindingComponent,
                red_text_directive_1.RedTextDirective,
                routing_example_programmers_component_1.RoutingExampleProgrammersComponent,
                service_caller_inventor_list_component_1.ServiceCallerInventorListComponent,
                title_pipe_1.TitlePipe,
                two_way_data_binding_component_1.TwoWayDataBindingComponent,
                binding_pages_component_1.BindingPagesComponent,
                bootstrap_pages_component_1.BootstrapPagesComponent,
                css_pages_component_1.CssPagesComponent,
                fundamentals_component_1.FundamentalsComponent,
                injection_pages_component_1.InjectionPagesComponent,
                life_cycle_pages_component_1.LifeCycleHookPagesComponent,
                pipe_pages_component_1.PipePagesComponent,
                promises_and_observables_component_1.PromisesAndObservablesComponent,
                service_pages_component_1.ServicePagesComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                programmer_http_service_1.ProgrammerHttpService,
                programmer_http_promise_service_1.ProgrammerHttpPromiseService,
                user_preferences_service_1.UserPreferenceService
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map