import EditCustomerController from './editCustomer.controller';
import templateUrl from './editCustomer.html';

const name = 'editCustomer';

const config = {
    url: '/:id/edit',
    templateUrl,
    controller: EditCustomerController,
    controllerAs: 'editCustomerCtrl',
    resolve: {
        customer: (CustomersResource, $stateParams) => CustomersResource.get({ id: $stateParams.id })
    }
};

export default { name, config };