import CartPageTemplate from './cart-page.template.html';

class CartPageController {
    /* @ngInject */
    constructor() {
    }

    $onInit() {

    }

    $onDestroy() {
    }
}

export default angular.module('app.cart-page', [])
    .component('appCartPage', {
        template: CartPageTemplate,
        controller: CartPageController,
        controllerAs: '$ctrl',
        bindings: {}
    })
    .name;