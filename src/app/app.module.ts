import * as angular from 'angular';
import { NgModule } from 'angular-ts-decorators';
import { Routes } from './config/app.routes';
import { AppComponent } from './components/app/app.component';
import { HomePageComponent } from "./components/home.page/home.page.component";
import { AboutPageComponent } from "./components/about.page/about.page.component";
import { ItemComponent } from './components/home.page/item/item.component';
import { ClickedDirective } from './directives/clicked/clicked.directive';
import { ItemsService } from './services/items.service';

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
                  $stateProvider: angular.ui.IStateProvider,
                  $locationProvider: angular.ILocationProvider) {
        Routes.forEach(state => $stateProvider.state(state.name, state));
        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }
}