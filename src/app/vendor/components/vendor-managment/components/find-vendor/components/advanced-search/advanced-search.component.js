(function () {
    angular.module('app.buyer.vendor-management.components.find-vendor.components.advanced-search', [])
        .component('kyvVendorManagementAdvancedSearch', {
            templateUrl: './advanced-search.template.html',
            controller: AdvancedSearchController,
            controllerAs: '$ctrl',
            bindings: {}
        });

    /* @ngInject */
    function AdvancedSearchController() {
        var vm = this;
        vm.$onInit = onInit;
        vm.$onDestroy = onDestroy;


        function onInit() {

        }

        function onDestroy() {

        }
    }
})();
