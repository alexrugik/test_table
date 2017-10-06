import InfoPageTemplate from  './info-page.template.html';

class InfoPageController {
    constructor() {
    }

    $onInit() {
        console.log(15);
    }

    $onDestroy() {
    }
}

export default angular.module('app.vendor.components.infoPageComponent', [])
    .component('kyvInfoPage', {
        template: InfoPageTemplate,
        controller: InfoPageController,
        controllerAs: '$ctrl',
        bindings: {

        }
    })
    .name;