var request = require('request');
var q = require('q');
//var setBalance = require('../routes/index').setBalance;

function awesomefunction(name) {
    return "a" + name;
}

function balanceRestCall() {
    var deferred = q.defer();
    var path = 'http://api.reimaginebanking.com/customers/5659ca8d3921211200ef1cf1/accounts?key=bcde991cf2442c24f6f4f24d0cd65949';
    request(path, function (error, response, body) {
        if (!error && response.statusCode == 200) {
           var balResponse = JSON.parse(body);
            var bal = balResponse[0].balance;
            console.log(body);
            console.log(bal);
            deferred.resolve(bal);
            //  setBalance(bal);
        }
    });
    return deferred.promise;
}

function imageCheck() {
    var deferredImage = q.defer();
    request.post('https://api.clarifai.com/v1/tag/')
        .auth(null,null, true, '6zfUB2vQsHBLYKIUEHoW99sVyJzYf6')
        .form({

        })
    request(path, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var balResponse = JSON.parse(body);
            var category = balResponse.classes;
            console.log(body);
            console.log(category);
            deferredImage.resolve(category);
            //  setBalance(bal);
        }
    })
    return deferredImage.promise;
}

module.exports = {awesomefunc: awesomefunction, balanceRestCall: balanceRestCall, imageCheck: imageCheck};
