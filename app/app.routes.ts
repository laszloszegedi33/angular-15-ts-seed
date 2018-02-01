import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { IComponentState } from "./app.module";

export const routes: IComponentState[] = [
    { state: 'home', url: '/', component: HomeComponent },
    { state: 'about', url: '/about', component: AboutComponent }
];