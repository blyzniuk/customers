import CustomersListController from './customersList.controller';

const name = 'customersList';

const config = {
    url: '/',
    template: '<p>adasaaddsa</p>',
    controller: CustomersListController,
    controllerAs: 'customersListCtrl',
    resolve: {
        customers: (CustomersResourses) => {
            console.log('smth');
            return CustomersResourses.$get();
        }
    }
};

export default { name, config };