import * as angular from 'angular';
import { NgModule } from 'angular-ts-decorators';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

export interface IComponentState extends angular.ui.IState {
    state: string;
    component?: any;
    views?: { [name: string]: IComponentState };
}

@NgModule({
    name: 'AppModule',
    imports: [
        'ui.router'
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent
    ]
})
export class AppModule {
    private static setTemplate(state: IComponentState) {
        const selector = state.component.selector;
        state.template = `<${selector}></${selector}>`;
        delete state.component;
    }

    private static provideStates(states: IComponentState[], $stateProvider: angular.ui.IStateProvider) {
        states.map((config) => {
            const name = config.state;
            const namedState = config.views;
            if (namedState) {
                const namedViews = Object.keys(namedState);
                namedViews.forEach((view) => {
                    AppModule.setTemplate(namedState[view]);
                });
            }
            else {
                AppModule.setTemplate(config);
            }
            delete config.state;
            return {name, config};
        }).forEach(state => $stateProvider.state(state.name, state.config));
    }

    /*@ngInject*/
    config($urlRouterProvider: angular.ui.IUrlRouterProvider,
           $stateProvider: angular.ui.IStateProvider) {
        AppModule.provideStates(routes, $stateProvider);
        $urlRouterProvider.otherwise('/');
    }

    /*@ngInject*/
    run($window: angular.IWindowService, $q: angular.IQService) {
        // replace browser Promise to $q in app
        $window.Promise = $q;
    }
}