import * as angular from 'angular';
import { NgModule } from 'angular-ts-decorators';
import { Routes } from './app.routes.js';
import { AppComponent } from './app.component.js';
import { HomePageComponent } from "./home/home.component.js";
import { AboutPageComponent } from "./about/about.component.js";

export interface IComponentState extends angular.ui.IState {
    state: string;
    component?: any;
    views?: { [name: string]: IComponentState };
}

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
export class AppModule {
    private static setTemplate(state: IComponentState) {
        const selector = state.component.selector;
        state.template = `<${selector}></${selector}>`;
        delete state.component;
    }

    private static provideStates(states: IComponentState[], $stateProvider: angular.ui.IStateProvider) {
        states.forEach(state => $stateProvider.state(state.state, state));
    }

    /*@ngInject*/
    config($urlRouterProvider: angular.ui.IUrlRouterProvider,
           $stateProvider: angular.ui.IStateProvider) {
        AppModule.provideStates(Routes, $stateProvider);
        $urlRouterProvider.otherwise('/');
    }

    /*@ngInject*/
    run($window: angular.IWindowService, $q: angular.IQService) {
        // replace browser Promise to $q in app
        $window.Promise = $q;
    }
}