var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var mongoose = require('mongoose');
var app = express();


app.use(express.static(__dirname + '/angular')); //first page to load when servr runs
app.set('port', 3008);
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing       application/x-www-form-urlencoded
/*app.use(app.router);*/

mongoose.connect('mongodb://localhost/customers');//connect to customer dattabse in mongodb

//create the collection and define the fields
var User = mongoose.model('User', {

    type:String,
    userName:String,
    NameSinhala:String,
    NameTamil:String,
    NIC:String,
    active:Boolean,
    user:String,
    password:String,
    confpassword:String,
    startDate:Date,
    regDate:Date,
});


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

    //console.log(req.body);

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

    var newQuote1 =new User (
    {
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
    });

    //add data to database
    newQuote1.save(function (err, userObj) {
        if (err) {
            console.log(err);
        } else {
            console.log('saved successfully:', userObj);
        }
    });

    //add data to jason array
    quotes.push(newQuote);
    //console.log(quotes);

    res.json("response added");
});



http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
