//is required, mongoose.connect connects to the server... after localhost/ is the name of the database you want
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useNewUrlParser: true});
//startes the mongoose connection
var db =  mongoose.connection;
//this connection is pending
//db.on is saying on an error... run whats next
db.on('error') console.error.bind(console, 'connection error: '));
//db.once is saying onces file is open ..run whats next
db.once('open',function(){
  console.log('MongoDB has been connected!')
})
//all is derived from Schema in mongoose
let repoSchema = new mongoose.Schema({
  username: String,
  description: String,
  language: String,
  size: Number
});
//first argument is a singular name of the collection, second is the schema layout for the collection
let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;