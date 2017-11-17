import HomePageTemplate from './home.template.html';


class HomePageController {
    /* @ngInject */
    constructor($timeout, cartService, ItemsModel) {
        this.$timeout = $timeout;
        this.cartService = cartService;
        this.ItemsModel = ItemsModel;
    }

    $onInit() {
        this.data = [];
        this.setData();
    }

    setData() {
        this.data.length = 0;
        this.ItemsModel.getItems()
            .then(data => {
                this.data.push(...this.transformData(data));
            })
            .catch(error => {
                console.warn(error);
            });
        return this;
    }

    transformData(data) {
        return data.map(item => {
            item.ingredients = item.ingredients.join(',');
            return item;
        })
    }

    onAddItem(item) {
        this.cartService.addItem(item);
    }
}

export default angular.module('app.home-page', [])
    .component('appHomePage', {
        template: HomePageTemplate,
        controller: HomePageController,
        controllerAs: '$ctrl',
        bindings: {}
    })
    .name;