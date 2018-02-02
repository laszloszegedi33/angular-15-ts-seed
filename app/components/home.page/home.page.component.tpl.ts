export const template = `
<h1>HOME</h1>
<div class="item" ng-repeat="item in vm.items track by item._id">
    {{item.title}} {{item.price}} {{item.color}}
</div>
`;