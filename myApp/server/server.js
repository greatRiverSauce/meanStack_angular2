var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    cors =require('cors'),
    bodyParser = require('body-parser'),
    ObjectId = mongoose.Types.ObjectId;

mongoose.connect('mongodb://jackie:123@ds231739.mlab.com:31739/meanstack_angular2');
app.use(cors());
app.use(bodyParser.json());


var UserSchema = mongoose.Schema({
  'email': String,
  'password': String,
  'firstname': String,
  'lastname': String,
  'address': String,
  'city': String,
  'state':String,
  'zip': String,
  'phone': String
});
var User = mongoose.model('users', UserSchema);

app.post('/user/create', (req, res, next) => {
  let newUser = new User(req.body);
  newUser.save((err, doc) => {
    if (!err) {
      res.send({'success': true});
    } else {
      res.send({'success': false});
    }
  })
});

app.get('/user/:id', (req, res, next) => {
  var id = new ObjectId(req.params.id);
  User.findById(id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(err);
    }
  })
});

app.get('/user/email/:email', (req, res, next) => {
  User.findOne({email:req.params.email}, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(err);
    }
  })
});

app.listen(8000, function () {
  console.log('server start @8000');
})
