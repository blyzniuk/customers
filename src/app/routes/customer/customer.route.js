import CustomerController from './customer.controller';
import templateUrl from './customer.html';

const name = 'customer';

const config = {
    url: '/:id',
    templateUrl,
    controller: CustomerController,
    controllerAs: 'customerCtrl',
    resolve: {
        customer: (CustomersResource, $stateParams) => CustomersResource.get({ id: $stateParams.id })
    }
};

export default { name, config };