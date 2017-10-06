(function () {
    angular.module('app.buyer.vendor-management.components.vendor-relationships', [])
        .component('kyvVendorManagementVendorRelationships', {
            templateUrl: './vendor-relationships.template.html',
            controller: FindVendorController,
            controllerAs: '$ctrl',
            bindings: {

            }
        });

    /* @ngInject */
    function FindVendorController() {

    }
})();