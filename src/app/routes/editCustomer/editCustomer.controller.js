class EditCustomerController {
    constructor(customer, $state, CustomersResource) {
        Object.assign(this, {
            customer,
            $state,
            CustomersResource
        });
    }

    onSubmit(customer) {
        CustomersResource.update(customer)
            .then((savedCustomer) => $state.go('customer', { id: savedCustomer._id }));
    }
};

export default EditCustomerController;