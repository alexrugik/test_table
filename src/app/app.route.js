import {APP_ROUTES} from './app.const';

export default angular.module('app.route', [])
    .config(appRoute)
    .name;

/* @ngInject */
function appRoute($stateProvider) {
    $stateProvider
        .state('app', {
            abstract: true,
            url: '',
            views: {
                header: {template: '<app-header></app-header>'},
                main: {template: '<app-main>'}
            }
        })
        .state(APP_ROUTES.HOME, {
            url: '/home',
            template: '<app-home-page></app-home-page>'
        })
        .state(APP_ROUTES.CART, {
            url: '/cart',
            template: '<app-cart-page></app-cart-page>'
        })
        .state(APP_ROUTES.HISTORY, {
            url: '/history',
            template: '<app-history-page></app-history-page>'
        })
}