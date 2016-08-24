'use strict';

const Customer = require('./customers.model');
const RESPONSES = require('../../shared/responses');
const Q = require('q');
const lodash = require('lodash');

class CustomerController {
    getAll(req, res) {
        return Customer.find()
            .then((customers) => {
                res.status(RESPONSES.STATUS.OK).json(customers);
            })
            .catch((err) => {
                res.status(RESPONSES.STATUS.NOT_FOUND).json(err);
            });
    }

    add(req, res) {
        const modelInstance = new Customer(req.body);
        return modelInstance.save()
            .then((result) => {
                res.status(RESPONSES.STATUS.CREATED).json(result);
            })
            .catch((err) => {
                res.send(err);
            });
    }

    getById(req, res) {
        return Customer.findById(req.params.id)
            .then((customer) => {
                res.status(RESPONSES.STATUS.OK).json(customer);
            })
            .catch((err) => {
                res.status(RESPONSES.STATUS.NOT_FOUND).json(err);
            });
    }

    update(req, res) {
        return Customer.findById(req.params.id)
            .then((modelInstance) => {
                console.log(modelInstance);
                const updatedInstance = lodash.extend(modelInstance, req.body);
                console.log(updatedInstance);
                return updatedInstance.save();
            })
            .then((result) => {
                res.status(RESPONSES.STATUS.OK).json(result);
            })
            .catch((err) => {
                res.status(RESPONSES.STATUS.NOT_FOUND).json(err);
            });
    }

    delete(req, res) {
        return Customer.remove({ _id: req.params.id })
            .then((result) => {
                res.status(RESPONSES.STATUS.OK).json(result);
            })
            .catch((err) => {
                res.status(RESPONSES.STATUS.NOT_FOUND).send(err);
            });
    }
}

module.exports = CustomerController;