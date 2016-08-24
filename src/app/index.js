import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import ngMaterial from 'angular-material';

import routerConfig from './router.js';
import CustomersResource from './customers.resource';

import customersForm from './components/customersForm/customersForm.component';
import customersList from './components/customersList/customersList.component';
import customersListItem from './components/customersListItem/customersListItem.component';
import customersProfile from './components/customersProfile/customersProfile.component';

const api = 'http://localhost\:3000/api/';
//const api = 'https://customers-list.herokuapp.com/api/';

angular.module('customers', [ngMaterial, uiRouter, ngResource])
    .constant('CUSTOMERS_RESOURCE_URL', `${api}customers/:id`)
    .service('CustomersResource', CustomersResource)
    .config(routerConfig)
    .component('customersForm', customersForm)
    .component('customersList', customersList)
    .component('customersListItem', customersListItem)
    .component('customersProfile', customersProfile);