import AddCustomerController from "./addCustomer.controller";
import templateUrl from "./addCustomer.html";

const name = 'addCustomer';

const config = {
    url: '/add',
    controller: AddCustomerController,
    controllerAs: 'addCustomerCtrl',
    templateUrl
};

export default { name, config };