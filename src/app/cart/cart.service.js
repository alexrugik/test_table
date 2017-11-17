class CartService {
    constructor() {
        this.__items = [];
    }

    addItem(item) {
        if (!item) {
            throw new Error('no item to add!');
        }
        this.__items.push(item);
        return this;
    }

    getItemById(id) {
        return this.__items.find({id});
    }

    addItems(items) {
        if (!items) {
            throw new Error('no items to add!');
        }
        this.__items.push(...items);
        return this;
    }

    getItems() {
        return this.__items;
    }

}

export default angular.module('app.cart-page.cart-service', [])
    .service('cartService', CartService)
    .name;
