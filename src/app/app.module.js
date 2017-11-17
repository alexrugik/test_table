import Styles from '../assets/index';

import AppConfig from './app.config';
import AppRun from './app.run';
import AppRoute from './app.route';
import AppComponent from './app.component';
import AppDependency from './app.dependency';
import AppShared from './shared/shared.module';

import CartModule from './cart/cart.module';
import HomePageComponent from './home/home.component';
import HistoryPageComponent from './history/history.component';

export default angular.module('app', [
    AppDependency,
    AppRun,
    AppRoute,
    AppConfig,
    AppComponent,
    AppShared,
    CartModule,
    HomePageComponent,
    HistoryPageComponent
])
    .name;