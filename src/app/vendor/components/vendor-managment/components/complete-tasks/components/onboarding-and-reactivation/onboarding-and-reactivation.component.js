(function () {
    angular.module('app.buyer.vendor-management.complete-tasks.components.onboarding-and-reactivation', [])
        .component('kyvVendorManagementOnboardingAndReactivation', {
            templateUrl: './onboarding-and-reactivation.template.html',
            controller: OffBoardingAndReactivationController,
            controllerAs: '$ctrl',
            bindings: {}
        });

    /* @ngInject */
    function OffBoardingAndReactivationController() {
        var vm = this;
        vm.$onInit = onInit;
        vm.$onDestroy = onDestroy;


        function onInit() {

        }

        function onDestroy() {

        }
    }
})();
