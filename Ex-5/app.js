var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/restful_blog_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

var blogSchema = mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog",blogSchema);

Blog.create({
    title:"I like Developement",
    image: "https://images.squarespace-cdn.com/content/v1/5a95c3532714e5f5a64efb22/1557515224922-D3RAW7DSZMKDX0KFXNZ6/ke17ZwdGBToddI8pDm48kH5O5rEag-q_dfnSA_OIXDUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc7WIM3Ojl90JoQ4J5b9cOf460ceHYPx8F6QbgOUR5EpMN8nlqjQT5dpMN0tHLVIqc/Leadership_development_-_a_framework_to_identify_priorities_and_make_the_right_choices-cover-1024x665.jpg?format=2500w",
    body: "Developemnt is fun"
});

app.get("/blogs",(req,res)=>{
    Blog.find({},(err,blogs)=>{
        if(err){
            console.log(err);
        }else{
            res.render("index",{blogs:blogs});
        }
    });
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})

