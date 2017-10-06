(function () {
    angular.module('app.vendor-management.route', [])
        .config(vendorManagmentRoute);

    /* @ngInject */
    function vendorManagmentRoute($stateProvider) {
        $stateProvider
            .state('buyer.vendor-management', {
                abstract: true,
                url: '/vendor-management',
                template: '<kyv-vendor-management></kyv-vendor-management>'
            })
            .state('buyer.vendor-management.administration', {
                url: '/administration',
                template: '<kyv-vendor-management-administration></kyv-vendor-management-administration>'
            })
            .state('buyer.vendor-management.complete-tasks', {
                url: '/complete-tasks',
                template: '<kyv-vendor-management-complete-tasks></kyv-vendor-management-complete-tasks>'
            })
            .state('buyer.vendor-management.find-vendor', {
                url: '/find-vendor',
                template: '<kyv-vendor-management-find-vendor></kyv-vendor-management-find-vendor>'
            })
            .state('buyer.vendor-management.vendor-relationships', {
                url: '/vendor-relationships',
                template: '<kyv-vendor-management-vendor-relationships></kyv-vendor-management-vendor-relationships>'
            })
    }
})();