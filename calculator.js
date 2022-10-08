const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function (req,res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req,res) {
    var num1=Number(req.body.first);
    var num2=Number(req.body.second);

    var result= num1+num2;

    res.send("The result is:" + result);
});

app.get("/bmi",function (req,res) {
    res.sendFile(__dirname + "/bmi.html");
});

app.post("/bmi", function (req,res) {
    var num1=parseFloat(req.body.weight);
    var num2=parseFloat(req.body.height);

    var result= num2/(num1*num1);

    res.send("Your BMI is:" + result);
});

app.listen(3000,function () {
    console.log("Listenting on port 3000");
})