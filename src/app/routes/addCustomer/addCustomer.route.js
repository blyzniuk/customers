import AddCustomerController from "./addCustomer.controller";

const name = 'addCustomer';

const config = {
    url: '/add',
    controller: AddCustomerController,
    controllerAs: 'addCustomerCtrl',
    templateUrl: 'addCustomer/addCustomer.html'
};

export default { name, config };