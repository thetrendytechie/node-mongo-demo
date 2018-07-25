const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
  //console.log(req.body);
});


app.listen(3000, () => {
  console.log('Started on port 3000');
});





//
//
// var newUser = new User({
//   name: 'Alex',
//   email: 'alex@a.com'
// });
//
// var newUser2 = new User({
//   email: 'john'
// });
//
// // var newTodo = new Todo({
// //   text: 'cook dinner'
// // });
//
// // newTodo.save().then((doc) => {
// //   console.log(`Saved todo: `, doc);
// // }, (e) => {
// //   console.log('Unable to save Todo');
// // });
//
// var newTodo2 = new Todo({
//   text: 'finish this dang course',
//   complete: false,
//   completedAt: undefined
// });
//
// newTodo2.save().then((doc) => {
//   console.log(doc);
// }, (e) => {
//   console.log(e);
// });
//
// newUser.save().then((doc) => {
//   console.log(doc);
// }, (e) => {
//   console.log(e);
// });
//
// newUser2.save().then((doc) => {
//   console.log(doc);
// }, (e) => {
//   console.log(e);
// });
