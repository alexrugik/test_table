import TableTemplate from './table.template.html';
import TableStyles from '../../../../../node_modules/ng-table/bundles/ng-table.css';

class TableController {
    /* @ngInject */
    constructor(NgTableParams) {
        this.NgTableParams = NgTableParams;
    }

    $onInit() {
        this.initTable();
    }

    $onDestroy() {
    }

    initTable() {
        this.cols = [
            {field: 'name', title: 'Name', sortable: false, show: true},
            {field: 'age', title: 'Age', sortable: 'age', show: true},
            {field: 'price', title: 'Price', sortable: 'price', show: true},
            {field: 'someData', title: 'someData', sortable: 'someData', show: true}
        ];

        const data = [
            {name: 'Moroni', age: 25, price: 50, someData: [1, 2, 3]},
            {name: 'Moroni', age: 10, price: 50, someData: [1, 2, 3]},
            {name: 'Moroni', age: 15, price: 50, someData: [1, 2, 3]},
            {name: 'Moroni', age: 50, price: 50, someData: [1, 2, 3]}
        ];
        this.tableParams = new this.NgTableParams({}, {dataset: data});
    }
}

export default angular.module('app.shared.components.table', [])
    .component('appTableTest', {
        template: TableTemplate,
        controller: TableController,
        controllerAs: '$ctrl',
        bindings: {
            config: '<'
            /*
            headerData: '<',
            data: '<',
                 callback: '&',
            callbackLabel: '@'
             */
        }
    })
    .name