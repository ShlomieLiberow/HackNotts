var awesomefunction = require('../libs/myfuncs').awesomefunc;
var balanceG = require('../libs/myfuncs').balanceRestCall;
var imageCheck = require('../libs/myfuncs').imageCheck;
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

router.get('/signin', function (req, res, next) {
    res.render('signin', {title: 'Express'});
});

router.get('/dashboard', function (req, res, next) {
    res.render('dashboard', {title: 'Express'});
});

router.post('/', function (req, res, next) {
    var name = req.body.fname;
    name = awesomefunction(name);
    balanceG().then(function (bal) {
        res.render('index', {title: 'Express', firstname: name, balance: 'Balance is ' + bal});
    });
}),

    router.post('/drunkCheck', function (req, res, next) {
        imageCheck().then(function (status) {
            res.render('fail', {title: 'Express', classList: 'Tags:' + status});
        });
    });

module.exports = router;
