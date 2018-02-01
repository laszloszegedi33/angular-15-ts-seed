import * as angular from 'angular';
import 'angular-ui-router';
import { NgModule } from 'angular-ts-decorators';
import { AppModule } from './app.module';

angular.bootstrap(document, [(<NgModule>AppModule).module.name], {strictDi: true});