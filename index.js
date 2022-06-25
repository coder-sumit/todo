// get express
const express = require('express');
const port = 8000;
const app = express();


// set views and assets
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./assets'));

// to parse form data
app.use(express.urlencoded());

// db connections
const db = require("./config/mongoose");
const { findByIdAndDelete } = require('./models/todo');
const Todo = require("./models/todo");

// home route
app.get('/', function(req, res){
      Todo.find({}, (err,todo)=>{
        if(err){
            console.error("Unable to fetch data");
            return res.send("Unable to fetch data");
        }
        return res.render('home', {
            todo: todo
        });
      });
});

// add post route
app.post('/add_post', (req, res)=>{
      Todo.create({
        desc: req.body.desc,
        cat: req.body.cat,
        date: req.body.date
      }, function(err, newObj){
        if(err){
            console.error("Unable to add");
            return res.redirect('back');
        }
        console.log("***", newObj);
        return res.redirect('back');
      });
});

// delete request
app.get('/delete_todo', (req, res)=>{
    const ids = req.query.ids;
    const idArr = ids.split("%");
    idArr.pop();

    while(idArr.length != 0){
      let id = idArr.pop();
      Todo.findByIdAndDelete(id, (e)=>{
        if(e){
          console.log(e);
          return  res.send("Unable to delete");
        }
        console.log("Deleted!");
      });

    }

    setTimeout(()=>{
      return res.redirect('/');
    }, 400);

});

// test server
app.listen(port, function(err){
    if(err){
    console.log(`Error: ${err}`);
    return;
    }
    console.log(`Server is running on port: ${port}`);
})