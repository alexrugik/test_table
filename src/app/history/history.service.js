class HistoryService {
    constructor() {
        this.__items = [];
    }

    addItem(item) {
        if (!item) {
            throw new Error('no item to add!');
        }
        this.__items.push(item);
        return this;
    }

    addItems(items) {
        if (!items) {
            throw new Error('no items to add!');
        }
        this.__items.push(...items);
        return this;
    }

    getItemById(id) {
        return this.__items.find({id});
    }


    getItems() {
        return this.__items;
    }

    deleteItem(itemToDelete) {
        if (!itemToDelete) {
            throw new Error('no item to delete!');
        }
        const index = this.__items.findIndex(item => item.id === itemToDelete.id);
        if (index > -1) {
            this.__items.splice(index, 1);
        }
    }
}

export default angular.module('app.history.history-service', [])
    .service('historyService', HistoryService)
    .name;