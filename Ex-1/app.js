var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("Hi There! Welcome to my assignment.");
});

app.get("/speak/:animal",function(req,res){
    var name = req.params.animal;
    if(name==="pig")res.send("The pig says "+ "\'Oink\'");
    else if(name==="cow")res.send("The cow says "+ "\'Moo\'");
    else if(name==="dog")res.send("The dog says "+ "\'Woof Woof\'")
});

app.get("/repeat/:word/:times",function(req,res){
    var word = req.params.word;
    var times = req.params.times;
    var s = "";
    for(var i=0;i<times;i++)s+=word + " ";
    res.send(s);
});

app.get("*",function(req,res){
    res.send("Sorry, page not found...What are you doing with your life?");
})

app.listen(3000,function(){
    console.log("Server is started!");
})

