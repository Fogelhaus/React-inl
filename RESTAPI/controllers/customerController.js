const db = require('mongoose');
const Customer = require('../models/customer');

// unrestricted
exports.getCustomers = (req, res) => {


    Customer.find().then(data => res.status(200).json(data))



    // let _customers = [
    //     { _id: 1, firstname: 'Nicklas', lastname: 'Johansson', address: 'Svedmyravägen 132, 121 12 Bromölla' },
    //     { _id: 2, firstname: 'Anna', lastname: 'Svensson', address: 'Hällangatan 1, 523 13 Motala' },
    //     { _id: 3, firstname: 'Matilda', lastname: 'Andersson', address: 'Kapparenvägen 12, 611 58 Skövde' },
    //     { _id: 4, firstname: 'Ali', lastname: 'Dubaji', address: 'Stensundet 43, 121 86 Göteborg' },
    //     { _id: 5, firstname: 'Håkan', lastname: 'Broberg', address: 'Brovägen 2, 521 22 Stockholm' },
    //     { _id: 6, firstname: 'Anja', lastname: 'Persson', address: 'Gustavsgatan 22, 221 17 Älvsbyn' },
    //     { _id: 7, firstname: 'Mohammad', lastname: 'Naf', address: 'Vasagatan 1, 721 92 Mora' }
    // ]


}

exports.getCustomerById = (req, res) => {

    Customer.findOne({ _id: req.params.id }).then(data => res.status(200).json(data))


    // let _customer = { id: 3, firstname: 'Matilda', lastname: 'Andersson', address: 'Kapparenvägen 12, 611 58 Skövde' }

    // return res.status(200).json(_customer);
}

exports.getCustomerByFirstName = (req, res) => {

    Customer.find({ firstname: req.params.id }).then(data => res.status(200).json(data))
}

exports.getCustomerByLastName = (req, res) => {

    Customer.find({ lastname: req.params.id }).then(data => res.status(200).json(data))
}

exports.getCustomerByAddress = (req, res) => {

    Customer.find({ address: req.params.id }).then(data => res.status(200).json(data))
}

exports.createCustomer = (req, res) => {
    let customer = new Customer(
        {
            _id: new db.Types.ObjectId,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            address: req.body.address
        }
    )
    customer
        .save()
        .then(() => {
            res.status(201).json({
                message: "Kunden skapades"
            })

        })


        .catch((error) => {
            res.status(500).json({
                message: "Kunden skapades inte",
                error: error
            })

        })
}
exports.deleteCustomerById = (req, res) => {
    Customer.deleteOne({ _id: req.params.id }).then(res.status(200).json ({
        message: "kund togs bort från databasen"
    }))
}