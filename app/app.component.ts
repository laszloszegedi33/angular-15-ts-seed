import { Component } from 'angular-ts-decorators';

const template = `
<nav class="navbar navbar-inverse" role="navigation">
    <ul class="nav navbar-nav">
        <li><a ui-sref="home">Home</a></li>
        <li><a ui-sref="about">About</a></li>
    </ul>
</nav>

<div class="container">
    <div ui-view></div>
</div>
`;

@Component({
    selector: 'app',
    template: template
})
export class AppComponent {}