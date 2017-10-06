(function () {
    angular.module('app.buyer.component.vendor-management', [])
        .component('kyvVendorManagement', {
            templateUrl: './vendor-management.template',
            controller: VendorManagementController,
            controllerAs: '$ctrl',
            bindings: {}
        });

    /* @ngInject */
    function VendorManagementController() {
        var vm = this;
        vm.$onInit = onInit;
        vm.$onDestroy = onDestroy;


        function onInit() {
            addHeaderConfig();
        }

        function onDestroy() {

        }

        function addHeaderConfig() {
            vm.title = 'Vendor Management';
            vm.tabsConfig = [
                {
                    title: 'Complete My Tasks',
                    state: 'buyer.vendor-management.complete-tasks'
                },
                {
                    title: 'Find An Existing Vendor',
                    state: 'buyer.vendor-management.find-vendor'
                },
                {
                    title: 'My Vendor Relationships',
                    state: 'buyer.vendor-management.vendor-relationships'
                },
                {
                    title: 'Administration',
                    state: 'buyer.vendor-management.administration'
                }
            ];
        }
    }
})();



