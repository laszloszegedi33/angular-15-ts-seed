import * as angular from 'angular';
import { NgModule } from 'angular-ts-decorators';
import { Routes } from './config/app.routes.js';
import { AppComponent } from './components/app/app.component.js';
import { HomePageComponent } from "./components/home.page/home.page.component.js";
import { AboutPageComponent } from "./components/about.page/about.page.component.js";
import { ItemComponent } from './components/home.page/item/item.component.js';
import { ClickedDirective } from './directives/clicked/clicked.directive.js';
import { ItemsService } from './services/items.service.js';

@NgModule({
    id: 'AppModule',
    imports: [
        'ui.router'
    ],
    declarations: [
        AppComponent,
        HomePageComponent,
        ItemComponent,
        AboutPageComponent,
        ClickedDirective
    ],
    providers: [ItemsService]
})
export class AppModule implements NgModule {
    /*@ngInject*/
    static config($urlRouterProvider: angular.ui.IUrlRouterProvider,
           $stateProvider: angular.ui.IStateProvider) {
        Routes.forEach(state => $stateProvider.state(state.name, state));
        $urlRouterProvider.otherwise('/');
    }
}