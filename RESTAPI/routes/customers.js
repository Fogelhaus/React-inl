const route = require('express').Router();

const authorization = require('../auth/auth.js');
const customers = require('../controllers/customerController.js');

// unrestricted routes

// route.get("/:firstname", customers.getCustomerByFirstName);
// route.get("/:lastname", customers.getCustomerByLastName);
// route.get("/:address", customers.getCustomerByAddress);




// restricted routes

route.get("/all", authorization, customers.getCustomers);
route.get("/:id", authorization, customers.getCustomerById);
route.post ("/", authorization, customers.createCustomer);

route.delete('/:id',authorization,  customers.deleteCustomerById)

module.exports = route;