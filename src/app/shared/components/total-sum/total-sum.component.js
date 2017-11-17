import TotalSumTemplate from './total-sum.template.html';

class TotalSumController {
    /* @ngInject */
    constructor($scope) {
        $scope.$watchCollection('$ctrl.config.data', (newVal, oldVal) => {
            this.calculateTotalSum();
        }, true);
    }

    calculateTotalSum() {
        this.totalSum = this.config.data
            .map(item => item[this.config.property])
            .reduce((prevValue, currentValue) => prevValue + currentValue, 0);
        return this;
    }
}

export default angular.module('app.shared.components.total-sum', [])
    .component('appTotalSum', {
        template: TotalSumTemplate,
        controller: TotalSumController,
        controllerAs: '$ctrl',
        bindings: {
            config: '<'
            /*
            {
            text: just simply text
            data: array that we will use for calculation total sum
            property: that we will calculate
            }
             */
        }
    })
    .name
