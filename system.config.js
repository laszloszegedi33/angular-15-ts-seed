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
        "typescript": "npm:typescript/lib/typescript.js"
    },
    meta: {
        'angular': {
            format: 'global',
            exports: 'angular'
        },
    }
});