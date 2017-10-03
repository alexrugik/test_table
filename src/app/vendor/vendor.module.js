import Components from './components';
import Services from './services';
import VendorConfig from './vendor.config';
import VendorRoute from './vendor.route';

import HeaderComponent from '../shared/components/header/header.component';

export default angular.module('app', [
    'ui.router',
    'ngRoute',
    Components,
    Services,
    VendorConfig,
    VendorRoute,
    HeaderComponent
]);