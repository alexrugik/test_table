import CartService from './cart.service';
import CartComponent from './cart.component';

export default angular.module('app.cart', [
    CartService,
    CartComponent
])
    .name;
