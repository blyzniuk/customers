class AddCustomerController {
    constructor($state, CustomersResource) {
        Object.assign(this, {
            customer: {},
            CustomersResource,
            $state
        });
    }

    onSubmit(customer) {
        this.CustomersResource.add(customer)
            .then((savedCustomer) => this.$state.go('customer', { id: savedCustomer._id }));
    }
}

export default AddCustomerController;