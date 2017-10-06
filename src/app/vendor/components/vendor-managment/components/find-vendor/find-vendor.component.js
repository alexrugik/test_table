(function () {
    angular.module('app.buyer.vendor-management.components.find-vendor', [
        'app.buyer.vendor-management.components.find-vendor.components.advanced-search'
    ])
        .component('kyvVendorManagementFindVendor', {
            templateUrl: './find-vendor.template.html',
            controller: VendorRelationshipsController,
            controllerAs: '$ctrl',
            bindings: {

            }
        });

    /* @ngInject */
    function VendorRelationshipsController() {
        var vm = this;
        vm.$onInit = onInit;
        vm.$onDestroy = onDestroy;
        vm.showAdvancedSearch = showAdvancedSearch;

        function onInit() {
            vm.isVisibleAdnvancedSearch = false;
        }

        function onDestroy() {

        }

        function showAdvancedSearch() {
            return vm.isVisibleAdnvancedSearch = !vm.isVisibleAdnvancedSearch;
        }


    }
})();


