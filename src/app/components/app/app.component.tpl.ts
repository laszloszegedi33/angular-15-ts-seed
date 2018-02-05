export const template = `
<nav class="navbar navbar-inverse" role="navigation">
    <ul class="nav navbar-nav">
        <li><a ui-sref="home" clicked>Home</a></li>
        <li><a ui-sref="about" clicked>About</a></li>
    </ul>
</nav>

<div class="container">
    <div ui-view></div>
</div>
`;