import Styles from '../assets/index';

import AppConfig from './app.config';
import AppRun from './app.run';
import AppRoute from './app.route';
import AppComponent from './app.component';
import AppDependency from './app.dependency';
import AppShared from './shared/shared.module';

import HomePageComponent from './home-page/home-page.component';
import CartPageComponent from './cart-page/cart-page.component';
import HistoryPageComponent from './history-page/history-page.component';

export default angular.module('app', [
    AppDependency,
    AppRun,
    AppRoute,
    AppConfig,
    AppComponent,
    AppShared,
    HomePageComponent,
    CartPageComponent,
    HistoryPageComponent
])
    .name;