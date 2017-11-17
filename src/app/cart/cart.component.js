import CartPageTemplate from './cart.template.html';

class CartPageController {
    /* @ngInject */
    constructor(cartService, historyService) {
        this.cartService = cartService;
        this.historyService = historyService;
    }

    $onInit() {
        this.initTotalSumConfig()
            .initTableConfig();
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

    initTableConfig() {
        this.tableConfig = {
            headerData: ['Number', 'Name', 'Ingredients separated by comma', 'Price prepended by currency\n' +
            '            sign', ' Add to cart'],
            data: this.cartService.getItems(),
            callbackLabel: 'delete Item from Cart',
            callback: this.onDeleteItem.bind(this)
        };
        return this;
    }

    onDeleteItem(item) {
        this.cartService.deleteItem(item);
    }

    onSaveHistory() {
        this.historyService.addItems(JSON.parse(JSON.stringify(this.cartService.getItems())));
        this.cartService.resetItems();
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