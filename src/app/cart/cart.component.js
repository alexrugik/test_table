import CartPageTemplate from './cart.template.html';

class CartPageController {
    /* @ngInject */
    constructor(cartService) {
        this.cartService = cartService;
    }

    $onInit() {

    }

    $onDestroy() {
    }
}

export default angular.module('app.cart.cart-component', [])
    .component('appCartPage', {
        template: CartPageTemplate,
        controller: CartPageController,
        controllerAs: '$ctrl',
        bindings: {}
    })
    .name;