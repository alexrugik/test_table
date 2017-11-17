import CartPageTemplate from './cart.template.html';

class CartPageController {
    /* @ngInject */
    constructor(cartService) {
        this.cartService = cartService;
    }

    $onInit() {
        this.initTotalSumConfig();
    }

    $onDestroy() {

    }

    initTotalSumConfig() {
        this.totalSumConfig = {
            data: this.cartService.getItems(),
            text: 'Here is total price:',
            property: 'price'
        };
        return this;
    }

    onSaveHistory() {

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