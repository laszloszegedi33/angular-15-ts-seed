var BASE_URL = '/app';

SystemJS.config({
    baseURL: BASE_URL,
    defaultJSExtensions: true,
    paths: {
        "npm:": "../node_modules/"
    },
    map: {
        "angular": "npm:angular/angular.js",
        "angular-ui-router": "npm:@uirouter/angularjs/release/angular-ui-router.js",
        "typescript": "npm:typescript/lib/typescript.js",
        "angular-ts-decorators": "npm:angular-ts-decorators/angular-ts-decorators.js",
        "tslib": "npm:tslib/tslib.js",
        "reflect-metadata": "npm:reflect-metadata/Reflect.js",
        "es-module-loader": "npm:es-module-loader/core/register-loader.js",
        "traceur": "npm:traceur/bin/traceur.js"
    },
    meta: {
        'angular': {
            format: 'global',
            exports: 'angular'
        }
    }
});

SystemJS.import('index').then(function () {
    console.info('bootstrap finished');
}).catch(function (e) {
    console.error(e);
});