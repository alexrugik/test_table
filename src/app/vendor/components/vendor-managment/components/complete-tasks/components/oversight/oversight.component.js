(function () {
    angular.module('app.buyer.vendor-management.components.complete-tasks.components.oversight', [])
        .component('kyvVendorManagementOversight', {
            templateUrl: './oversight.template.html',
            controller: OversightController,
            controllerAs: '$ctrl',
            bindings: {}
        });

    /* @ngInject */
    function OversightController() {
        var vm = this;
        vm.$onInit = onInit;
        vm.$onDestroy = onDestroy;


        function onInit() {

        }

        function onDestroy() {

        }
    }
})();
