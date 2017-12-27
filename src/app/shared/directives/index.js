import Accordion from './accordion/accrodion.directive';
import Sticky from './sticky/sticky.directive';

export default angular.module('app.shared.directives', [
    Accordion,
    Sticky
])
    .name;