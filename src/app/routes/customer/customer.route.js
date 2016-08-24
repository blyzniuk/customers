import CustomerController from './customer.controller';

const name = 'customer';

const config = {
    url: '/:id',
    templateUrl: 'customer/customer.html',
    controller: CustomerController,
    controllerAs: 'customerCtrl',
    resolve: {
        customer: (CustomersResourses, $stateParams) => CustomersResourses.$get({ id: $stateParams.projectId })
    }
};

export default { name, config };