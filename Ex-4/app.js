
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cat_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat",catSchema);//models the Cat as a singlular version to a daatabse as a collection

// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save(function(err,cat){
//     if(err){
//         console.log("Something went wrong!");
//     } else {
//         console.log("We just saved a cat to the database");
//         console.log(cat);
//     }
// })

Cat.create({
    name: "Snow White",
    age:15,
    temperament:"VBland"
},function(err,cat){
    if(err){
        console.log(err);
    }else{
        console.log(cat);
    }
});

Cat.find({}, function(err,cats){
    if(err){
        console.log("Error");
    }else{
        console.log("All the cats");
        console.log(cats);
    }
});

