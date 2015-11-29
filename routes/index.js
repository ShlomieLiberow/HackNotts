/*npm install -g express-generator
express -e hbs*/
var awesomefunction = require('../libs/myfuncs').awesomefunc;
var balanceG = require('../libs/myfuncs').balanceRestCall;
var imageCheck = require('../libs/myfuncs').imageCheck;
var curlTest = require('../libs/myfuncs').curlTest;
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express', firstname: "", balance: ""});
});

router.get('/signin', function (req, res, next) {
    res.render('signin', {title: 'Express'});
});

router.get('/dashboard', function (req, res, next) {
    balanceG().then(function (bal) {
        res.render('dashboard', {title: 'Express', balance: bal});
    })
});

router.post('/', function (req, res, next) {
    res.render('index', {title: 'Express', balance: 'Balance is £' + bal});
}),

    router.get('/drunkFail', function (req, res, next) {
        imageCheck().then(function(data) {
            res.render('fail', {title: 'Express', classes: data.results[0].result.tag.classes});
            console.log(data.results[0].result.tag.classes)
        })
    });

router.get('/marauders', function (req, res, next) {
        res.render('marauders');
});

router.get('/photo', function (req, res, next) {
    res.render('photo');
});

router.get('/drunkPass', function (req, res, next) {
    imageCheck().then(function(data) {
        res.render('pass', {title: 'Express', classes: data.results[0].result.tag.classes});
        console.log(data.results[0].result.tag.classes)
    })
});

module.exports = router;
