//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5b5631f57ddb553a68e48371')
    },
    {
      $set: {
        complete: true
      }
    },
    {
      returnOriginal: false
    }).then((res) => {
      console.log(res);
    });
  //db.close();

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b5631877bde63d46f1a8f1c')
  },
  {
    $set: {
      name: 'Sage'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  });
});
