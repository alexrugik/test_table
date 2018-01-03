import TableStTemplate from './table-st.template.html';
import TableStStyles from './table-st.styles.css';
import {TABLE_CONFIG} from './table-st.const';

class TableStController {
    /* @ngInject */
    constructor($timeout, tableService) {
        this.$timeout = $timeout;
        this.tableService = tableService;
    }

    $onInit() {
        this.testName = 'test name1111';

        this.gridOptions = TABLE_CONFIG;
        this.gridOptions.onSelectionChanged = this.onSelectionChanged.bind(this);

        this.getTableData()
            .then(([data, headersData]) => {
                this.gridOptions.api.setColumnDefs(headersData);
                this.gridOptions.api.setRowData(data);
            });
    }

    getTableData() {
        return Promise.all([this.tableService.getBodyData(), this.tableService.getHeadersData()])
            .then(([data, headersData]) => {
                return [data, this.convertTableHeaders(headersData)];
            });
    }

    convertTableHeaders(headers) {
        return headers.map((header) => {
            return this.extendTableHeaders({headerName: header.title, field: header.field});
        })
    }

    onSelectionChanged() {
        const selections = this.gridOptions.api.getSelectedRows();
        console.log('selections = ', selections);
    }

    test(data) {
        if (!data.selected) {
            data.selected = !data.selected;
        }
    }

    /**
     * add here custom settings and also template for every cell
     * @param header
     * @returns {*}
     */
    extendTableHeaders(header) {
        if ((header) instanceof Object !== true) {
            throw new Error('for extendTableHeaders header should be object that we can expend');
        }

        let extendData; //should be object that we will assign to our header

        switch (header.field) {
            //Vendor Name
            case 'vendorName': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye" aria-hidden="true"></i></span>`,
                    checkboxSelection: true,
                    pinned: 'left',
                    template: `
                        <span ng-bind="data.vendorName" style="font-weight: bold"></span>
                    `
                };
                break;
            }
            //Country
            case 'countryCode': {
                extendData = {
                    template: `
                        <span ng-bind="data.countryCode"></span>
                    `,
                    cellStyle: (params) => {
                        return {textAlign: 'center'}
                    },
                    width: 90
                };
                break;
            }
            //Pending Requests
            case 'pendingRequestCount': {
                extendData = {
                    template: `
                        <span ng-if="data.pendingRequestCount === 0" 
                            ng-bind="data.pendingRequestCount">    
                        </span>
                        <a  ng-if="data.pendingRequestCount !== 0" 
                            class="clickable badge"  
                            ng-bind="data.pendingRequestCount">
                        </a>
                    `,
                    cellStyle: (params) => {
                        return {textAlign: 'center'}
                    },
                    width: 180
                };
                break;
            }
            //Cyber Security
            case 'bitSightRating': {
                extendData = {
                    template: `
                        <span>
                          <a class="badge"  ng-bind="data.pendingRequestCount" ></a>
                        </span>
                    `,
                    cellStyle: (params) => {
                        return {textAlign: 'center'}
                    },
                    width: 180
                };
                break;
            }
            //Signification News
            case 'newsCount': {
                extendData = {
                    template: `
                        <span>
                          <a class="badge"  ng-bind="data.newsCount" ></a>
                        </span>
                    `
                };
                break;
            }
            //Question Status
            case 'ddqStatus': {
                extendData = {
                    template: `
                        <a ng-if="data.ddqStatus !== 'Not Requested'" ui-sref="app.cart"><span  ng-bind="data.ddqStatus"></span></a>
                        <span  ng-if="data.ddqStatus === 'Not Requested'" ng-bind="data.ddqStatus"></span>
                    `,
                    cellStyle: (params) => {
                        return {textAlign: 'center'}
                    },
                    width: 170
                };
                break;
            }
            //Request Questionnaire
            case 'vid': {
                extendData = {
                    template: `
                        <span ng-bind="data.vid"></span>
                    `
                };
                break;
            }
            //Risk Score
            case 'riskScore': {
                extendData = {
                    template: `
                        <span ng-bind="data.riskScore"></span>
                    `
                };
                break;
            }
            //Screening
            case 'screeningResult': {
                extendData = {
                    template: `
                        <span ng-bind="data.screeningResult"></span>
                    `
                };
                break;
            }
            //Contract End Date
            case 'contractEndDate': {
                extendData = {
                    template: `
                        <span ng-bind="data.contractEndDate"></span>
                    `
                };
                break;
            }
            //Alias
            case 'alias': {
                extendData = {
                    template: `
                        <span ng-bind="data.alias"></span>
                    `
                };
                break;
            }
            //Criticality
            case 'criticalityValue': {
                extendData = {
                    template: `
                        <span ng-bind="data.criticalityValue"></span>
                    `
                };
                break;
            }

            //Contract Start Date
            case 'contractStartDate': {
                extendData = {
                    template: `
                        <span ng-bind="data.contractStartDate"></span>
                    `
                };
                break;
            }
        }
        return Object.assign({}, header, extendData);
    }
}

export default angular.module('app.shared.components.tableSt', [])
    .component('appTableSt', {
        template: TableStTemplate,
        controller: TableStController,
        controllerAs: '$ctrl',
        bindings: {}
    })
    .name
