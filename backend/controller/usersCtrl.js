var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var User = require('../models/users');
//var Common = require('../models/saveUser');
var jwt = require('jsonwebtoken');
//var aes256 = require('aes256');
//var algorithm = 'aes-256-ctr';
//var privateKey = '37LvDSm4XvjYOh9Y';
//var crypto = require('crypto');
//var nodemailer = require('nodemailer');
//var smtpTransport = require('nodemailer-smtp-transport');
var jsonwebtoken = require("jsonwebtoken")


// var transporter = nodemailer.createTransport(smtpTransport({
//     service: "Gmail",
//     auth: {
//         user: 'vishaka.renge14@gmail.com',
//         pass: 'VISHAKA@14'
//     }
// }));


/* 
@functionality: Registering users and sending email verification
@author: vishakaR
@created: 4sept
@last_modified: 6sept
@modified_by: [sandeepK]
*/
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

    // //console.log(token)
    // var linkToBeSend = "http" + ":" + "//localhost:3000/api/activateAccount?token=" + token
    // var link = ' <a href=" ' + linkToBeSend + ' ">CLICK HERE</a> ';
    // //console.log(link)

    // var mailOptions = {
    //     from: 'vishaka.renge14@gmail.com',
    //     to: req.body.email,
    //     subject: 'Verification Mail',
    //     html: '<body> <div><h1>You have successfully registered.' + link + 'to activate</h1></div></body>',
    //     text: 'HIVE Registered'
    // };
    // transporter.sendMail(mailOptions, function (error, info) {
    //     if (error) {
    //         console.log(error);
    //     } else {}
    // });

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

    //res.send(authResult);
};






/* 
@functionality: loginUser registered user
@author: vishakaR
@created: 4 sept
@last_modified: 5 sept
@modified_by: [akshayP,sandeepK]
*/
exports.loginUser = function (req, res) {
    console.log("i m in login......................")
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

    //res.send(authResult);
};




// exports.loginUser = function (req, res) {
//     console.log("data received", req.body);

//     User.findOne({
//         email: req.body.email,
//         password: req.body.password
//     }, function (err, userlogin) {
//         if (err) {
//             console.log(err)
//         }
//         if (!userlogin) {
//             console.log("200", userlogin)
//             return res.status(200).send({});
//         } else {
//             console.log("299")
//             return res.status(299).send({});
//         }



//     });



// };



/* 
@functionality: setting verificationTokenEmailedToUser "True"
@author: sandeepK
@created: 6 Sept
@last_modified:
@modified_by: []
*/
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