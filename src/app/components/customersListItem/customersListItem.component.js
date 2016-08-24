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

    getAddressLine() {
        const {address, street, city, state} = this.customer;
        return [address, street, city, state].filter((item) => !!item).join(',');
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