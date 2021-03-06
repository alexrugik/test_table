export const TABLE_CONFIG = {
    animateRows: true,
    rowSelection: false,
    enableSorting: true,
    angularCompileRows: true,
    angularCompileHeaders: true,
    columnDefs: null,
    rowData: null,
    defaultColDef: {
        width: 200,
        headerComponentParams: {
            menuIcon: 'fa-bars',
            template:
            '<div class="ag-cell-label-container table-header" role="presentation"' +
            '  <span ref="eMenu" class="ag-header-icon ag-header-cell-menu-button"></span>' +
            '  <div ref="eLabel" class="ag-header-cell-label" role="presentation">' +
            '    <span ref="eSortOrder" class="ag-header-icon ag-sort-order" ></span>' +
            '    <span ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon" ></span>' +
            '    <span ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon" ></span>' +
            '    <span ref="eSortNone" class="ag-header-icon ag-sort-none-icon" ></span>' +
            '    <span ref="eText" class="ag-header-cell-text" role="columnheader"></span>' +
            '    <span ref="eFilter" class="ag-header-icon ag-filter-icon"></span>' +
            '  </div>' +
            '</div>'
        }
    },
    onSelectionChanged: null,
    cellStyle: () => {
        return {color: 'red', textAlign: 'center'}
    },
    rowHeight: 35,
    rowStyle: {
        'border-bottom': '1px solid #ddd',
    },
    headerHeight: 50
};