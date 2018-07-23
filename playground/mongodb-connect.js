//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

//OBJECT DESTRUCTURING
// var user = {name: 'Sage', age: 25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Do this thing',
  //   complete: false
  // }, (err, res) => {
  //   if(err){
  //     return console.log('Unable to insert todo: ', err);
  //   }
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Sage',
    age: 25,
    location: 'Tatooine'
  }, (err, res) => {
    if(err){
      return console.log('Unable to insert user: ', err);
    }
    console.log(JSON.stringify(res.ops, undefined, 2));
  });

  db.close();
});
