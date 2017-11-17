import Header from './header/header.component';
import TotalSum from './total-sum/total-sum.component';
import Table from './table/table.component';

export default angular.module('app.shared.components', [
    Header,
    TotalSum,
    Table
])
    .name;