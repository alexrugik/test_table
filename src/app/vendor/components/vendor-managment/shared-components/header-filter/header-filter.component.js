(function () {
    angular.module('app.shared.components.header-filter', [])
        .component('kyvHeaderFilter', {
            templateUrl: './header-filter.template.html',
            controller: HeaderFilterController,
            controllerAs: '$ctrl',
            bindings: {
                /**
                 * textFilterConfig will be applied to test filter
                 * callback should added data to parentComponent
                 * run callback function when user communicate with interface
                 * example: {label:string = 'Put some text and get result', searchText:string,  callback: function() {} = myCallback}
                 */
                textFilterConfig: '<',
                /**
                 * textFilterConfig === {} that will be repeated and applied to filters
                 * callback should added data to parentComponent
                 * run callback function when user communicate with interface
                 * example: {callback: function() {} = myCallback, filters = [{label:string, name:string, selected:{}, values:[{value:string}]}
                 */
                filtersConfig: '<'
            }
        });

    /* @ngInject */
    function HeaderFilterController() {
        var vm = this;
        vm.$onInit = onInit;
        vm.$onDestroy = onDestroy;


        function onInit() {

        }

        function onDestroy() {

        }
    }
})();
