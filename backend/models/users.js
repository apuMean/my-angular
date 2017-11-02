var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*-------USER TABLE------*/
var userSchema = new mongoose.Schema({

    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
        // index: {
        //     unique: true
        // }
    },
    password: {
        type: String
    },
    contact: {
        type: Number
    }


});


var User = mongoose.model('User', userSchema);
module.exports = User;