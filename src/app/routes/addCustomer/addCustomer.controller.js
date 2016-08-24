class AddCustomerController {
    constructor($state, CustomersResource) {
        Object.assign(this, {
            customer: {},
            CustomersResource,
            $state
        });
    }

    onSubmit(customer) {
        this.CustomersResource.save(customer)
            .$promise
            .then((savedCustomer) => this.$state.go('customer', { id: savedCustomer._id }));
    }
}

export default AddCustomerController;