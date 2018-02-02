import { IComponentState } from "./app.module.js";

export const Routes: IComponentState[] = [
    { state: 'home', url: '/', template: '<home-page></home-page>' },
    { state: 'about', url: '/about', component: '<about-page></about-page>' }
];