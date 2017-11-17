import HomePageTemplate from './home-page.template.html';

class HomePageController {
    constructor() {
    }

    $onInit() {
    }

    $onDestroy() {
    }
}

export default angular.module('app.home-page', [])
    .component('appHomePage', {
        template: HomePageTemplate,
        controller: HomePageController,
        controllerAs: '$ctrl',
        bindings: {}
    })
    .name;