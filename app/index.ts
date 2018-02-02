import * as angular from 'angular';
import 'angular-ui-router';
import { AppModule } from './app.module.js';

export function bootstrap() {
    angular.bootstrap(document, [AppModule['module'].name]);
}

bootstrap();