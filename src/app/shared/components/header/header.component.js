import HeaderTemplate from './header.template.html';

class HeaderController {
    constructor() {

    }

    $onInit() {
    }

    $onDestroy() {
    }
}

export default angular.module('app.shared.components.header', [])
    .component('kyvSharedHeader', {
        template: HeaderTemplate,
        controller: HeaderController,
        controllerAs: '$ctrl',
        bindings: {}
    })
    .name;