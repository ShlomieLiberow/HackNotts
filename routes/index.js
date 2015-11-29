var awesomefunction = require('../libs/myfuncs').awesomefunc;
var balanceG = require('../libs/myfuncs').balanceRestCall;
var express = require('express');
var router = express.Router();
/*function setBalance(balance)
 {
 balanceG = balance;
 console.log("triggered");
 }*/
/* GET home page. */
router.get('/passmessage', function (req, res, next) {
    req.message = "hello";
    next();
});

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express', firstname: "", balance: ""});
});

router.post('/', function (req, res, next) {
    var name = req.body.fname;
    name = awesomefunction(name);
    balanceG().then(function (bal) {
        res.render('index', {title: 'Express', firstname: name, balance: 'Balance is '+bal});
    });
    var ball = 'gg';
});

module.exports = router;
