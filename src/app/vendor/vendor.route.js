import VendorTemplate from './vendor.template.html';

export default angular.module('app.vendor.route', [])
    .config(vendorRoute)
    .name;

function vendorRoute($stateProvider) {
    $stateProvider
        .state('vendor', {
            abstract: true,
            url: '/vendor',
            views: {
                header: {template: '<kyv-shared-header></kyv-shared-header>'},
                main: {template: VendorTemplate}

            }
        })
        .state('vendor.home-page', {
            url: '/home-page',
            template: '<kyv-home-page></kyv-home-page>'
        })
        .state('vendor.info-page', {
            url: '/info-page',
            template: '<kyv-info-page></kyv-info-page>'
        })
}