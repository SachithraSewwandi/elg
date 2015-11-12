var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

var app = express();
app.use(express.static(__dirname + '/angular'));
app.set('port', 3005);
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing       application/x-www-form-urlencoded


var quotes=[
    {
        type:"",
        userName:"Sewwandi",
        NameSinhala:"Sew",
        NameTamil:"one",
        NIC:"9264322323v",
        user:"",
        password:"",
        confpassword:"",
        startDate:"",
        regDate:"",
    }
];

app.post('*', function(req, res) {

    console.log(req.body);

    var newQuote = {
        type:req.body.type,
        userName : req.body.userName,
        NameSinhala:req.body.NameSinhala,
        NameTamil:req.body.NameTamil,
        NIC:req.body.NIC,
        active:req.body.active,
        user:req.body.user,
        password:req.body.password,
        confpassword:req.body.confpassword,
        startDate:req.body.startDate,
        regDate:req.body.regDate,
    };

    quotes.push(newQuote);
    console.log(quotes);

    res.json("response added");

});



http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
