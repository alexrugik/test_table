(function () {
    angular.module('app.buyer.vendor-management.complete-tasks.components.offboarding', [])
        .component('kyvVendorManagementOffboarding', {
            templateUrl: './offboarding.template.html',
            controller: OffboardingController,
            controllerAs: '$ctrl',
            bindings: {}
        });

    /* @ngInject */
    function OffboardingController() {
        var vm = this;
        vm.$onInit = onInit;
        vm.$onDestroy = onDestroy;


        function onInit() {

        }

        function onDestroy() {

        }
    }
})();
