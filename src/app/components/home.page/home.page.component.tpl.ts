export const template = `
<h1>HOME</h1>
<item ng-repeat="item in vm.items track by item._id" item="item" on-item-initialized="vm.itemInitialized(itemId)"></item>
`;