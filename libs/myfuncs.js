var request = require('request');
var q = require('q');
var clarify = require('./clarify')
clarify.initAPI('XXX', 'XXX');
/*
var exec = require('child_process').spawn("C:\\cygwin64\\bin\\curl.exe").exec('-H "Authorization: Bearer XXXXX" -F "encoded_data=@/tmp/10.jpg" https://api.clarifai.com/v1/tag/')
*/
//var setBalance = require('../routes/index').setBalance;

function awesomefunction(name) {
    return "a" + name;
}

function balanceRestCall() {
    var deferred = q.defer();
    var path = 'insert Key';
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
    var deferred = q.defer();
    clarify.tagURL('insert Image','test',function(err, res){
        deferred.resolve(res);
    })
    return deferred.promise;
}

module.exports = {awesomefunc: awesomefunction, balanceRestCall: balanceRestCall, imageCheck: imageCheck};
