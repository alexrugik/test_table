import HistoryPageTemplate from './history.template.html';

/* @ngInject */
class HistoryPageController {
    constructor(historyService) {
        this.historyService = historyService;
    }

    $onInit() {

    }

    $onDestroy() {
    }
}

export default angular.module('app.history-page', [])
    .component('appHistoryPage', {
        template: HistoryPageTemplate,
        controller: HistoryPageController,
        controllerAs: '$ctrl',
        bindings: {}
    })
    .name;