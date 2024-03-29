const db = require('mongoose');

const userSchema = db.Schema({

    _id:            db.Schema.Types.ObjectId,
    dob:            { type: String, required: true },
    firstname:      { type: String, required: true },
    lastname:       { type: String, required: true },
    addressline:    { type: String, required: true },
    zipcode:        { type: String, required: true },
    city:           { type: String, required: true },
    country:           { type: String },

    email:          { type: String, required: true, unique: true},
    password:       { type: String, required: true },

    created:        { type: Date, default: Date.now },
    modified:       { type: Date, default: Date.now }
    
});

module.exports = db.model("User", userSchema);

