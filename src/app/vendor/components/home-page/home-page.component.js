import HomePageTemplate from  './home-page.template.html';

class HomePageController {
    constructor() {

    }

    $onInit() {

    }

    $onDestroy() {

    }
}

export default angular.module('app.vendor.components.homePageComponent', [])
    .component('kyvHomePage', {
        template: HomePageTemplate,
        controller: HomePageController,
        controllerAs: '$ctrl',
        bindings: {

        }
    })
    .name;