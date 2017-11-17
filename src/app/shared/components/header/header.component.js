import HeaderTemplate from './header.template.html';
import {APP_ROUTES} from '../../../app.const';

class HeaderController {
    /* @ngInject */
    constructor() {
    }

    $onInit() {
        this.routes = Object.assign({}, APP_ROUTES);
    }

    $onDestroy() {
    }
}

export default angular.module('app.shared.components.header', [])
    .component('appHeader', {
        template: HeaderTemplate,
        controller: HeaderController,
        controllerAs: '$ctrl',
        bindings: {}
    })
    .name