import AccordionTemplate from './accordion.template.html';
import AccordionStyles from './accordion.styles.css';

class AccordionController {
    constructor() {
        this.showPanel = false;
    }

    onTogglePanel() {
        this.showPanel = !this.showPanel;
    }

    isActivePanel() {
        return this.showPanel;
    }
}


class Accordion {
    constructor() {
        this.template = AccordionTemplate;
        this.transclude = true;
        this.restrcit = 'E';
        this.scope = {
            title: '<',
            informMessage: '<',
            errorMessage: '<',
            isShowErrorMessage: '&'
        };
        this.bindToController = true;
        this.controllerAs = '$ctrl';
        this.controller = AccordionController;
    }
    
    link(scope, element, attr, controller, trasclude) {
        console.log('link');
    }
}

export default angular.module('app.shared.directives.accordion', [])
    .directive('appAccordion', () => new Accordion())
    .name;
