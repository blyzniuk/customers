import templateUrl from './customersListItem.html';

class CustomersListItemController {
    constructor($state) {
        this.$state = $state;
    }

    onNameClick() {
        this.$state.go('customer', { id: this.customer._id });
    }

    onEditClick() {
        this.$state.go('editCustomer', { id: this.customer._id });
    }
}

export default {
    templateUrl,
    controller: CustomersListItemController,
    controllerAs: 'customersListItemCtrl',
    bindings: {
        customer: '<'
    }
};