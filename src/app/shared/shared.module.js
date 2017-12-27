import Components from './components';
import Directives from './directives';
import Models from './models';
import Services from './services';

export default angular.module('app.shared', [
    Components,
    Directives,
    Models,
    Services
])
    .name;