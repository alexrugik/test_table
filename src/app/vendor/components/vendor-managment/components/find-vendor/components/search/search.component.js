(function () {
    angular.module('app.buyer.vendor-management.components.find-vendor.components.search', [])
        .component('kyvVendorManagementSearch', {
            templateUrl: './search.template.html',
            controller: SearchController,
            controllerAs: '$ctrl',
            bindings: {}
        });

    /* @ngInject */
    function SearchController() {
        var vm = this;
        vm.$onInit = onInit;
        vm.$onDestroy = onDestroy;


        function onInit() {

        }

        function onDestroy() {

        }
    }
})();
