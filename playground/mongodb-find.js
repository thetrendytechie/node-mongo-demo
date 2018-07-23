//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({complete: false}).toArray().then((documents) => {
  //   console.log('Todos: ');
  //   console.log(JSON.stringify(documents, undefined, 2));
  // }, (err) => {
  //   if(err){
  //     console.log('Unable to fetch todos ', err);
  //   }
  // });

  //FIND BY ID:
  // db.collection('Todos').find({
  //   _id: new ObjectID('5b561efc81fd18d2467946d4')
  // }).toArray().then((documents) => {
  //   console.log('Todos: ');
  //   console.log(JSON.stringify(documents, undefined, 2));
  // }, (err) => {
  //   if(err){
  //     console.log('Unable to fetch todos ', err);
  //   }
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   if(err){
  //     console.log('Unable to fetch todos ', err);
  //   }
  // });

  db.collection('Users').find(
    {name: 'Sage'}
  ).toArray().then((documents) => {
    console.log(`Users named Sage: `, JSON.stringify(documents, undefined, 2));
  }, (err) => {
    if(err){
      console.log('Unable to fetch todos ', err);
    }
  });


  //db.close();

});
