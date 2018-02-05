import * as angular from 'angular';
import { Injectable } from 'angular-ts-decorators';
import { apiUrl } from '../config/constants';

export interface Item {
    _id: string;
    title: string;
    price: number;
    color: string;
}

export interface ODataResponse<T> {
    '@odata.context': string;
    value: Array<T>
}

@Injectable('itemsService')
export class ItemsService {
    /*@ngInject*/
    constructor(private $http: angular.IHttpService) {}

    getItems(): angular.IHttpPromise<ODataResponse<Item>> {
        return this.$http.get(apiUrl);
    }
}