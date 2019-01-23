//Mongo Connection
var MongoClient = require('mongodb').MongoClient;

var myCollection;
var db = MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
  if(err)
    throw err;
    console.log("connected to the mongoDB");
    myCollection = db.collection('test_collection');
});

//Adding a document
//entry = document; table = collection

myCollection.insert({name: "doduck", description: "learn more than everyone"}, function(err, result) {
  if(err)
    throw err;

  console.log("entry saved");
});

//Updating a document by adding a field
//make sure this is run after insert is finished

myCollection.update({name: "doduck"}, {name: "doduck", description: "prototype your idea"}, {w:1}, function(err){
if(err)
  throw err;
  console.log("entry updated");
});

