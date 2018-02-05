import { Component, Input, Output, OnInit } from 'angular-ts-decorators';
import { Item } from '../../../services/items.service.js';

const template = `
<div class="item">
    {{vm.item.title}} {{vm.item.price}} {{vm.item.color}}
</div>`;

@Component({
    selector: 'item',
    template,
    controllerAs: 'vm'
})
export class ItemComponent implements OnInit {
    @Input() item: Item;
    @Output() onItemInitialized: Function;

    ngOnInit(): void {
        this.onItemInitialized({itemId: this.item._id})
    }
}