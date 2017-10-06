(function () {
    angular.module('app.buyer.vendor-management.components.complete-tasks', [
        'app.buyer.vendor-management.complete-tasks.components'
    ])
        .component('kyvVendorManagementCompleteTasks', {
            templateUrl: './complete-tasks.template.html',
            controller: CompleteTasksController,
            controllerAs: '$ctrl',
            bindings: {}
        });

    /* @ngInject */
    function CompleteTasksController() {

    }
})();