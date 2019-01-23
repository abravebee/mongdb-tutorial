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

//Updating a document 
//make sure this is run after insert is finished

myCollection.update({name: "doduck"}, {name: "doduck", description: "prototype your idea"}, {w:1}, function(err){
  if(err)
    throw err;
  console.log("entry updated");
});

//Updating a document by adding a field
//using $set operation (or else full document will be overwritten)

myCollection.update({name: "doduck"}, {$set {industry: "France"}}, {w:1}, function(err){
  if(err)
    throw err;
    console.log("entry updated");
})

//Updating a document by adding a field within a new field
//MongoDB is model free and supports fields within fields

myCollection.update({name: "doduck"}, {$set: {company: {employed: 10, officialName: "doduck LTD", industries: ["it consulting", "passionate programming"]}}}, {w:1}, function(err) {
  if(err)
    throw err;
  console.log('entry updated');
});

//Finding a document
//where name = doduck and company.officialName = doduck LTD
//should return one entry

var cursor = myCollection.find({"name" : "doduck", "company.officialName" : "doduck LTD"});
cursor.each(function(err, doc) {
  if(err)
    throw err;
  if(doc==null)
    return;
  
    console.log("document find:");
    console.log(doc.name);
    console.log(doc.company.employed);
});

//Remove a document
//containing "name" : "doduck"
myCollection.findAndModify({name: "doduck"}, [], {remove:true}, function(err, object) {
  if(err)
    throw err;
  console.log("document deleted");
})