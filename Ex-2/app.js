var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("home");
});

app.get("/fallinlovewith/:thing",function(req,res){
    var thing = req.params.thing;
    // res.send("You fell in love with "+ thing);
    res.render("love",{thingvar:thing});
});

app.get("/posts",function(req,res){
    var posts = [
        {title:"Harry Potter",author:"James Cameron"},
        {title:"England Cricket Board",author:"Eoin Morgan"}
    ];
    res.render("posts",{posts:posts});
})

app.listen(3000,function(){
    console.log("Server has started on port 3000");
});