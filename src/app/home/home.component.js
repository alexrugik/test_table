import HomePageTemplate from './home.template.html';


class HomePageController {
    /* @ngInject */
    constructor(cartService, ItemsModel) {
        this.cartService = cartService;
        this.ItemsModel = ItemsModel;
    }

    $onInit() {

        this.panelConfig = {
            title: 'Test title',
            informMessage: 'Some text that inform you',
            errorMessage: 'Some Error',
            isShowErrorMessage: () => false
        };
        this.testArr = [1, 2, 3];
        this.data = [];
        this.setData()
            .initTableConfig()
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
        this.cartService.addItem(Object.assign({}, item));
    }

    initTableConfig() {
        this.tableConfig = {
            headerData: ['Number', 'Name', 'Ingredients separated by comma', 'Price prepended by currency\n' +
            '            sign', ' Add to cart'],
            data: this.data,
            callbackLabel: 'add Item to Cart',
            callback: this.onAddItem.bind(this)
        };
        return this;
    }

    calculation() {
        const arrayOfArray = [[1, 2], [3, 4], [[5, 6]], 77];
        const flattened = arrayOfArray.reduce((res, a) => [...res, ...a], []);
        console.log(flattened);

        const arr = [1, 2, 3, [99, 101]];
        const result = arr.reduce((item, acum) => {
            console.log(item);
            console.log(acum);
            return [...item, ...acum];
        }, []);

        console.log(result);


        const arr2 = ['apple', 'tea', 'banana', 'ice', 'apple', '1', '1', 1];

        const result2 = arr2.reduce((acum, item, index, array) => {
            console.log(acum);
            console.log(item);
            return acum.set(item, 'exist');
        }, new Map());
        console.log(result2);
        console.log(result2.keys());

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

