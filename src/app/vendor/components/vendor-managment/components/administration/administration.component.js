(function () {
    angular.module('app.buyer.vendor-management.components.administration', [])
        .component('kyvVendorManagementAdministration', {
            templateUrl: './administration.template.html',
            controller: VendorManagementController,
            controllerAs: '$ctrl',
            bindings: {

            }
        });

    /* @ngInject */
    function VendorManagementController() {

    }
})();