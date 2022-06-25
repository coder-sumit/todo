// reqire mongoose
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/todo');

const db = mongoose.connection;
// on error
db.on('err', console.error.bind(console, "Error connecting to database"));
// up and all done
db.once('open', ()=>{
    console.log("Connected to DB successfully!");
});
