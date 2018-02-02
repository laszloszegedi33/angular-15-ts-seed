import * as angular from 'angular';

export const Routes: angular.ui.IState[] = [
    { name: 'home', url: '/', template: '<home-page></home-page>' },
    { name: 'about', url: '/about', template: '<about-page></about-page>' }
];