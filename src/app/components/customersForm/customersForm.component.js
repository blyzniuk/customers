import templateUrl from './customersForm.html';

export default {
    templateUrl,
    controllerAs: 'customersFormCtrl',
    bindings: {
        customer: '<',
        onSubmit: '&'
    }
};