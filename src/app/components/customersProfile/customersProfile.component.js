import templateUrl from './customersProfile.html';

class CustomersProfileController {
    constructor($state, CustomersResource) {
        Object.assign(this, {
            CustomersResource,
            $state
        });
    }

    onEditClick() {
        this.$state.go('editCustomer', { id: this.customer._id });
    }

    onDeleteClick() {
        this.CustomersResource.delete({ id: this.customer._id })
            .$promise
            .then(() => this.$state.go('customersList'));
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