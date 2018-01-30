System.config({
    baseURL : "/src/",
    transpiler: 'typescript',
    paths : {
        "npm:*" : "./../node_modules/*"
    },
    meta: {
        "angular": { format: 'global', exports: 'angular' },
        "angular-ui-router": { deps: ['angular'] }
    },
    map : {
        "angular" : "npm:angular/angular.js",
        "angular-ui-router": "npm:angular-ui-router/release/angular-ui-router.js"
    },
    packages: {
        '.': {
            defaultExtension: 'ts'
        },
        'npm:': {
            defaultExtension: 'js'
        }
    }
});
