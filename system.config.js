System.config({
    baseURL: "app/",
    defaultJSExtensions: true,
    transpiler: "typescript",
    paths: {
        "npm:*": "../node_modules/*"
    },
    map: {
        "angular": "npm:angular/angular.js",
        "angular-ui-router": "npm:@uirouter/angularjs/release/angular-ui-router.js",
        "typescript": "npm:typescript/lib/typescript.js",
        "angular-ts-decorators": "npm:angular-ts-decorators/angular-ts-decorators.js",
        "tslib": "npm:tslib/tslib.js",
        "reflect-metadata": "npm:reflect-metadata//Reflect.js"
    },
    meta: {
        'angular': {
            format: 'global',
            exports: 'angular'
        },
    }
});