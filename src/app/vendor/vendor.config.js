export default angular.module('app.vendor.config', [])
    .config(vendorConfig)
    .name;

/** @ngInject */
function vendorConfig($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/vendor/home-page');
    $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
    });
}