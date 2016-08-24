import customer from './routes/customer/customer.route';
import addCustomer from './routes/addCustomer/addCustomer.route';
import editCustomer from './routes/editCustomer/editCustomer.route';
import customersList from './routes/customersList/customersList.route';

export default function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state(addCustomer.name, addCustomer.config)
        .state(editCustomer.name, editCustomer.config)
        .state(customersList.name, customersList.config)
        .state(customer.name, customer.config);

    $urlRouterProvider.otherwise('/');
}