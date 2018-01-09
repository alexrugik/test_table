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
            return this.extendTableHeaders({
                headerName: header.title,
                field: header.field,
                class: header.class + " white-bg",
                cpd: header.cpd
            });
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
        //console.log(header);

        let extendData; //should be object that we will assign to our header

        switch (header.field) {
            //Vendor Name
            case 'vendorName': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    checkboxSelection: true,
                    pinned: 'left',
                    template: `
                        <span ng-bind="data.vendorName" class="vendor-name-link" title="{{data.vendorName}}"></span>
                    `,
                    cellClass: header.class,
                };
                break;
            }
            //Country
            case 'countryCode': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-bind="data.countryCode"></span>
                    `,
                    cellClass: header.class,
                    cellStyle: (params) => {
                        return {textAlign: 'center'}
                    },
                    width: 90
                };
                break;
            }
            // # of Products/Services
            case 'productCount': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-bind="data.productCount"></span>
                    `,
                    cellClass: header.class,
                    cellStyle: () => {
                        return {textAlign: 'center'};
                    },
                    width: 135
                };
                break;
            }
            // # of Contacts
            case 'noOfContacts': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-bind="data.noOfContacts"></span>
                    `,
                    cellClass: header.class,
                    cellStyle: () => {
                        return {textAlign: 'center'};
                    },
                    width: 120
                };
                break;
            }
            //Pending Requests
            case 'pendingRequestCount': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-if="data.pendingRequestCount === 0" 
                            ng-bind="data.pendingRequestCount">    
                        </span>
                        <a  ng-if="data.pendingRequestCount !== 0" 
                            class="pending-requests clickable badge"  
                            ng-bind="data.pendingRequestCount">
                        </a>
                    `,
                    cellClass: header.class,
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
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span>
                          <a class="clickable">+</a> 
                        </span>
                    `,
                    cellClass: header.class,
                    cellStyle: (params) => {
                        return {textAlign: 'center'}
                    },
                    width: 120
                };
                break;
            }
            // Financial Stability Score
            case 'score': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span>
                            <a class="clickable" ng-bind="data.score" title="Based on S&P probability of default"></a>
                        </span>
                    `,
                    cellStyle: () => {
                        return {textAlign: 'center'}
                    },
                    cellClass: header.class,
                    width: 180
                };
                break;
            }
            //Signification News
            case 'newsCount': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span>
                          <a class="badge clickable significant-news"  ng-bind="data.newsCount" ></a>
                        </span>
                    `,
                    cellClass: header.class,
                    cellStyle: () => {
                        return {textAlign: 'center'}
                    }
                };
                break;
            }
            //Question Status
            case 'ddqStatus': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <a ng-if="data.ddqStatus !== 'Not Requested'" ui-sref="app.cart"><span  ng-bind="data.ddqStatus"></span></a>
                        <span  ng-if="data.ddqStatus === 'Not Requested'" ng-bind="data.ddqStatus"></span>
                    `,
                    cellClass: header.class,
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
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <a class="clickable" ui-sref="app.questionnaire.library.request({compId: data.vid, name: header.field})">Request</a>
                    `,
                    cellClass: header.class,
                    cellStyle: () => {
                        return {textAlign: 'center'}
                    },
                    width: 90
                };
                break;
            }
            //Risk Score
            case 'riskScore': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <i ng-if="data.riskScore" class="fa fa-circle risk-score-circle"></i><span ng-bind="data.riskScore"></span>
                    `,
                    cellClass: header.class,
                    cellStyle: () => {
                        return {textAlign: 'center'}
                    },
                    width: 90
                };
                break;
            }
            // # of Employees
            case 'empCounts': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-bind="data.empCounts"></span>
                    `,
                    cellClass: header.class,
                    cellStyle: () => {
                        return {textAlign: 'center'}
                    },
                    width: 90
                };
                break;
            }
            // Industry Description
            case 'industryDescription': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-bind="data.industryDescription"></span>
                    `,
                    cellClass: header.class,
                    cellStyle: () => {
                        return {textAlign: 'center'}
                    }
                };
                break;
            }
            //Screening
            case 'screeningResult': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <i class="fa fa-clock-o"></i>                        
                        <span ng-bind="data.screeningResult"></span>
                    `,
                    cellClass: header.class,
                    cellStyle: () => {
                        return {textAlign: 'center'}
                    },
                    width: 90
                };
                break;
            }
            //Contract End Date
            case 'contractEndDate': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-bind="data.contractEndDate| date: 'MMM d y'"></span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            //Alias
            case 'alias': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-bind="data.alias"></span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            // Annual Spend
            case 'annualSpendValue': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-bind="data.annualSpendValue"></span>
                    `,
                    cellClass: header.class,
                    width: 90
                };
                break;
            }
            //Criticality
            case 'criticalityValue': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-bind="data.criticalityValue"></span>
                    `,
                    cellClass: header.class,
                };
                break;
            }
            // Risk Level
            case 'risk level': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-repeat="level in data['risk level']">{{level}}</span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            // Business Owner
            case 'business owner': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-repeat="owner in data['business owner']">{{owner}}</span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            // My Vendor Id
            case 'my vendor id': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-repeat="vendorId in data['my vendor id']">{{vendorId}}</span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            // Active
            case 'active': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-repeat="active in data.active">{{active}}</span>
                    `,
                    cellClass: header.class,
                    width: 90
                };
                break;
            }
            //Contract Start Date
            case 'contractStartDate': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-bind="data.contractStartDate | date: 'MMM d y'"></span>
                    `,
                    cellClass: header.class,
                };
                break;
            }
            // My Communications
            case 'mycommuncation': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-repeat="communication in data.mycommuncation">{{communication}}</span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            // DropV
            case 'dropv': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-repeat="drop in data.dropv">{{drop}}</span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            // Addd
            case 'addd': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-repeat="addd in data.addd">{{addd}}</span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            // Add1dfgggg
            case 'add1dfgggg': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-repeat="addd in data.add1dfgggg">{{addd}}</span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            // Addd1
            case 'addd1': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-repeat="addd in data.addd1">{{addd1}}</span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            // MULTI
            case 'multi': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-repeat="multi in data.multi">{{multi}}</span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            // Color
            case 'color': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-repeat="color in data.color">{{color}}<span ng-if="!$last">,</span> </span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            // ASDF
            case 'asdf': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-repeat="asdf in data.asdf">{{asdf}}</span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            // JDFG
            case 'jdfg': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-repeat="jdfg in data.jdfg">{{jdfg}}</span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            // defg
            case 'defg': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-repeat="defg in data.defg">{{defg}}</span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            // asdg
            case 'asdg': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-repeat="asdg in data.asdg">{{asdg}}</span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            // filter
            case 'filter': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-bind="data.filter"></span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            // Region
            case 'region': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-bind="data.region"></span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            // testii
            case 'testii': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-bind="data.testii"></span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            // custsing
            case 'custsing': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-bind="data.custsing"></span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            // custmult
            case 'custmult': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-bind="data.custmult"></span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            // testn
            case 'testn': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-repeat="testn in data.testn">{{testn}}</span>
                    `,
                    cellClass: header.class
                };
                break
            }
            // sin
            case 'sin': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-bind="data.sin"></span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            // custchart
            case 'custchart': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-repeat="cust in data.custchart">{{cust}}</span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            // cuschat
            case 'cuschat': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-repeat="cust in data.custchat">{{cust}}</span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            // notcust
            case 'notcust': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-bind="data.notcust"></span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            // sha
            case 'sha': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-bind="data.sha"></span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            // adobe
            case 'adobe': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-repeat="adobe in data.adobe">{{adobe}}</span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            // shailu
            case 'shailu': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-repeat="shailu in data.shailu">{{shailu}}</span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            // CPD 2
            case 'cpd2': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-repeat="cpd2 in data.cpd2">{{cpd2}}</span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            // CPDSHALU
            case 'cpdshalu': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-repeat="cpdshalu in data.cpdshalu">{{cpdshalu}}</span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            // Demo
            case 'demo': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-repeat="demo in data.demo">{{demo}}</span>
                    `,
                    cellClass: header.class
                };
                break;
            }
            // Date Add
            case 'dateadd': {
                extendData = {
                    headerName: `<span>${header.headerName} <i class="fa fa-eye-slash" ng-if="header.cpd" aria-hidden="true"></i></span>`,
                    template: `
                        <span ng-bind="data.dateadd[0] | date: 'MMM d y'"></span>
                    `,
                    cellClass: header.class
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
