export const data = [
    {
        id: 0,
        name: 'margarita',
        ingredients: ['basil', 'tomato', 'mozzarella'],
        price: 5.75
    },
    {
        id: 1,
        name: 'peperoni',
        ingredients: ['peperoni', 'tomato', 'mozzarella', 'parmejano'],
        price: 7.00
    },
    {
        name: 'meat',
        ingredients: ['bacon', 'tomato', 'mozzarella', 'ham', 'salami'],
        price:
            12.00
    },
    {
        id: 2,
        name: 'marina',
        ingredients: ['shrimp', 'parmejano', 'tuna', 'galric'],
        price: 15.75
    }
];

class ItemsModel {
    constructor($timeout) {
        this.$timeout = $timeout;
    }

    getItems() {
        return this.$timeout(() => JSON.parse(JSON.stringify(data, 500)));
    }

}

export default angular.module('app.shared.models.items', [])
    .service('ItemsModel', ItemsModel)
    .name;
