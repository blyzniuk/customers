function resource($resource, CUSTOMERS_RESOURCE_URL) {
    return $resource(Customers_RESOURCE_URL, {
        id: '@id'
    }, {
        update: { method: 'PUT' }
    });
}

export default resource;