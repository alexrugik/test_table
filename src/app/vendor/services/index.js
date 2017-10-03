import ApiService from './api.service';
import DataService from './data.service';

export default angular.module('app.vendor.services', [
    ApiService,
    DataService
])
    .name;