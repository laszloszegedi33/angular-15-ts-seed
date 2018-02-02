import { HomeComponent } from './home/home.component.js';
import { AboutComponent } from './about/about.component.js';
import { IComponentState } from "./app.module.js";

export const Routes: IComponentState[] = [
    { state: 'home', url: '/', component: HomeComponent },
    { state: 'about', url: '/about', component: AboutComponent }
];