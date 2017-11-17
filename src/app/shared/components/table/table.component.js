import TableTemplate from './table.template.html';

class TableController {
    /* @ngInject */
    constructor() {
    }

    $onInit() {
    }

    $onDestroy() {
    }
}

export default angular.module('app.shared.components.table', [])
    .component('appTable', {
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