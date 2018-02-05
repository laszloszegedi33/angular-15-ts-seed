import { IHttpResponse } from 'angular';

import { Component, OnInit } from 'angular-ts-decorators';
import { template } from './home.page.component.tpl';
import { ItemsService, Item, ODataResponse } from '../../services/items.service';

@Component({
    selector: 'homePage',
    template: template,
    controllerAs: 'vm'
})
export class HomePageComponent implements OnInit {
    private _items: Array<Item> = [];

    /*@ngInject*/
    constructor(private itemsService: ItemsService) {}

    get items(): Array<any> {
        return this._items;
    }

    ngOnInit(): void {
        this.itemsService.getItems().then((response: IHttpResponse<ODataResponse<Item>>) => {
            this._items = response.data.value;
        });
    }

    itemInitialized(itemId: string): void {
        console.info('item is initialized', itemId);
    }
}