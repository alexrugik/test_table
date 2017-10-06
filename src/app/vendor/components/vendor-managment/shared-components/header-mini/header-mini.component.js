(function () {
    angular.module('app.shared.components.header-mini', [])
        .component('kyvHeaderMini', {
            templateUrl: './header-mini.template.html',
            controller: HeaderMiniController,
            controllerAs: '$ctrl',
            /**
             * config  === tab config([tab, tab, tab])
             * example:
             * title = 'TestTitle';
             * tabsConfig = [{title: testLink1, state: 'test.state1'}, {title: testLink2, state: 'test.state2'}];
             */
            bindings: {
                title: '<',
                tabsConfig: '<'
            }
        });

    /* @ngInject */
    function HeaderMiniController() {

    }
})();
