class CustomersListController {
    constructor(customers, $state) {
        Object.assign(this, {
            customers,
            $state
        })
    }

    onAddClick() {
        this.$state.go('addCustomer');
    }
}

export default CustomersListController;