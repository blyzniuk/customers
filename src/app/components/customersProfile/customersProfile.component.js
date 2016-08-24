import templateUrl from './customersProfile.html';

class CustomersProfileController {
    constructor($state) {
        this.$state = $state;
    }
    onEditClick() {
        this.$state.go('editCustomer', { id: this.customer._id });
    }
}

export default {
    templateUrl,
    controller: CustomersProfileController,
    controllerAs: 'customersProfileCtrl',
    bindings: {
        customer: '<'
    }
};