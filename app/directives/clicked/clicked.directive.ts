import * as angular from 'angular';
import { Directive, OnInit } from 'angular-ts-decorators';

@Directive({
    selector: '[clicked]'
})
export class ClickedDirective implements OnInit {
    /*@ngInject*/
    constructor(private $element: angular.IAugmentedJQuery) {}

    ngOnInit(): void {
        this.$element[0].addEventListener('click', () => console.info('clicked element is', this.$element));
    }
}