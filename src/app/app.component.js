import AppTemplate from './app.template.html';

class AppController {
    /* @ngInject */
    constructor($state) {
        this.$state = $state;
    }

    $onInit() {
    }

    $onDestroy() {
    }
}

export default angular.module('app.component', [])
    .component('appMain', {
        template: AppTemplate,
        controller: AppController,
        controllerAs: '$ctrl',
        bindings: {}
    })
    .name