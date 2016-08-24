import templateUrl from './customersForm.html';

class CustomersFormController {
    onSubmitClick() {
        this.onSubmit(this.customer);
    }
}

export default {
    templateUrl,
    controller: CustomersFormController,
    controllerAs: 'customersFormCtrl',
    bindings: {
        customer: '<',
        onSubmit: '&'
    }
};