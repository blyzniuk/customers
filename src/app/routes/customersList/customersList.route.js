import CustomersListController from './customersList.controller';
import templateUrl from './customersList.html';

const name = 'customersList';

const config = {
    url: '/',
    templateUrl,
    controller: CustomersListController,
    controllerAs: 'customersListCtrl',
    resolve: {
        customers: (CustomersResource) => CustomersResource.query()
    }
};

export default { name, config };