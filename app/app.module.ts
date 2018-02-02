import * as angular from 'angular';
import { NgModule } from 'angular-ts-decorators';
import { Routes } from './app.routes.js';
import { AppComponent } from './app.component.js';
import { HomePageComponent } from "./home/home.component.js";
import { AboutPageComponent } from "./about/about.component.js";

@NgModule({
    id: 'AppModule',
    imports: [
        'ui.router'
    ],
    declarations: [
        AppComponent,
        HomePageComponent,
        AboutPageComponent
    ]
})
export class AppModule implements NgModule {
    /*@ngInject*/
    static config($urlRouterProvider: angular.ui.IUrlRouterProvider,
           $stateProvider: angular.ui.IStateProvider) {
        Routes.forEach(state => $stateProvider.state(state.name, state));
        $urlRouterProvider.otherwise('/');
    }
}