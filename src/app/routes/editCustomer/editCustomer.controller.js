class EditCustomerController {
    constructor(customer, $state, CustomersResource) {
        Object.assign(this, {
            customer,
            $state,
            CustomersResource
        });
    }

    onSubmit(customer) {
        this.CustomersResource.update({ id: customer._id }, customer)
            .$promise
            .then((savedCustomer) => this.$state.go('customer', { id: savedCustomer._id }));
    }
};

export default EditCustomerController;