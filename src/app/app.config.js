export default angular.module('app.config', [])
    .config(appConfig)
    .name;

/* @ngInject */
function appConfig($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/home');
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}