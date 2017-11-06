var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var User = require('../models/users');
var jwt = require('jsonwebtoken');
var router = express.Router();
var jsonwebtoken = require("jsonwebtoken")
var multer = require('multer');
var DIR = '../frontend/src/assets/images/';
var upload = multer({
    dest: DIR,
    filename: function (req, file, cb) {

        cb(null, file.originalname)
    }
}).single('photo');




exports.registerUser = function (req, res, next) {

    //generating token
    var payload = {
        _id: req.body.email
    };
    var token = jsonwebtoken.sign(payload, 'secretKey');

    var data = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        contact: req.body.contact,

    });


    User.findOne({
        email: req.body.email
    }, function (err, em) {
        if (err) {
            console.log(err)
        } else if (em) {
            console.log("email address already exist..!")
            res.json({
                status: 299
            });
        } else {
            data.save(function (err) {
                if (err) {
                    console.log(err);
                } else {
                    res.json({
                        status: 200
                    })
                }
            });
        }

    });


};






exports.loginUser = function (req, res) {
    console.log("i m in login......................", req.body)
    User.findOne({
        email: req.body.email,
        password: req.body.password
    }, function (err, authResult) {
        if (err) {
            console.log(err)
        } else if (authResult) {
            console.log("authResult  ", authResult);
            var payload = {
                _id: authResult._id
            };
            var token = jsonwebtoken.sign(payload, 'secretKey');
            console.log(token, "  jwt token____________________________________");

            User.update({
                email: req.body.email
            }, {
                $set: {
                    token: token

                }
            }, function (err, data) {

                if (err) {
                    console.log(" err in update ", err);
                } else {
                    console.log('data->>', data);

                }
            });
            console.log("TOKEn ", token)

            res.json({
                status: 200,
                success: true,
                message: 'Enjoy your token!',
                token: token,
                email: req.body.email
            });
        } else {
            res.json({
                status: 299
            });
        }

    });

};



exports.verifyUserEmail = function (req, res) {

    //mongo query to set flag
    User.update({
        verificationTokenEmailedToUser: req.query.token
    }, {
        activateUser: true
    }, function (err, doc) {
        if (err) {} else {}
    });
    res.sendFile(path.join(__dirname, '../../public/dist/index.html'));
}

exports.viewusers = function (req, res) {
    console.log("view users ctrl", req.body);

    User.find({}, function (err, viewuserdata) {

        if (err) {
            console.log(err);
        } else {
            console.log("viewuser data-- in userctrl---", viewuserdata);
            res.send(viewuserdata);
        }
    });

}

exports.deleteuser = function (req, res) {
    delid = req.body.body;
    User.deleteOne({
        _id: delid
    }, function (err, data) {
        if (err) {
            console.log(" delete");
            res.json({
                status: 299,

            });
        } else {
            console.log(data);
            res.json({
                status: 200,

            });
        }
    });
    // User.find(function (err, data) {
    //     if (err) {
    //         console.log("data ");
    //     }
    //     if (data) {
    //         console.log("doing delete ");
    //         res.json(data);
    //     }
    // });
    console.log("delete ");
}



exports.edituser = function (req, res) {
    console.log("update function works properly", req.body);

    var id = req.body.body;
    var fname = req.body.firstname;
    var lname = req.body.lastname;
    var email = req.body.email;
    var contact = req.body.contact;

    User.update({
            _id: id
        }, {
            $set: {
                firstname: fname,
                lastname: lname,
                email: email,
                contact: contact,

            }
        },
        function (err, result) {

            if (err) throw err;
            else console.log("Record Updated");

            // res.send("Record updated");
        }
    );
    User.find(function (err, data) {
        if (err) {
            console.log("not present...........");
        }
        if (data) {
            console.log("Uppp...........");
            res.json(data);
        }
    });
    console.log("edit successfull");

}



//uploading image

exports.upload = function (req, res, next) {
    console.log('inside fileUpload ');
    var mailID = req.headers.authorization;
    console.log('mailID', mailID);
    var imgpath = '';
    upload(req, res, function (err) {
        if (err) {
            // An error occurred when uploading
            console.log(err);
            return res.status(422).send("an Error occured")
        }

        // // No error occured.
        imgpath = req.file.path;

        console.log("path of an image ", imgpath)



        User.update({
            email: mailID
        }, {
            $set: {
                path: imgpath,
            }
        }, function (err, data) {
            if (err) {
                console.log("error in delete");
            } else {
                console.log(data);
            }
        });


    });

}



exports.showdetails = function (req, res, next) {
    var email = req.body.body;
    console.log('mailIdmailId', email)
    console.log('inside showUsername')
    User.findOne({
        email: email
    }, function (err, data) {
        if (err) {
            console.log('error', err)
        } else {
            console.log('data1data1', data)
            res.json(data);
        }
    });
}