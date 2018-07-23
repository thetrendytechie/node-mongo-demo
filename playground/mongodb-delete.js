//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'eat'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'eat'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({complete: false}).then((result) => {
  //   console.log(result);
  // });

  //db.collection('Users').deleteMany({name: 'Sage'});

  db.collection('Users').findOneAndDelete(
    {_id: new ObjectID("5b56318a46605dd471069e67")}
  ).then((res) => {
    console.log(JSON.stringify(res, undefined, 2));
  });

  //db.close();

});
