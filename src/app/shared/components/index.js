import Header from './header/header.component';
import TotalSum from './total-sum/total-sum.component';
import Table from './table/table.component';
import TableTest from './table-test/table.component';
import TableSt from './table-st/table-st.component';

export default angular.module('app.shared.components', [
    Header,
    TotalSum,
    Table,
    TableTest,
    TableSt
])
    .name;