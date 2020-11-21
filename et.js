var express     = require("express");
var mongoose    = require("mongoose");
var bodyParser  = require("body-parser");
var Register    = require("./models/registerSchema");
const { compile } = require("ejs");
var app = express(); 
app.use(express.static(__dirname));
mongoose.connect("mongodb://localhost/Credit_Card",{useNewUrlParser:true,useUnifiedTopology: true});
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connection.once('open',function(){
    console.log("Connection has been made");
});

app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("landing");
});

app.get("/register",function(req,res){
    res.render("index.ejs");
});
app.post("/register",function(req,res){
    var name = req.body.name,
        DOB  = req.body.DOB,
        gender = req.body.gender,
        address = req.body.address,
        state = req.body.state,
        pin = req.body.pin,
        IFSC_Code = req.body.IFSC,
        workStatus = req.body.workstatus,
        salary = req.body.Salary,
        Email = req.body.email,
        accountNumber=req.body.accountNumber,
        contactNumber = req.body.contactNumber,
        occupation = req.body.occupation,
        institutionName = req.body.institutionName;
        var newRegistration = {name:name,DOB:DOB,gender:gender,accountNumber:accountNumber,contactNumber:contactNumber,address:address,Email:Email,state:state,pin:pin,IFSC_Code:IFSC_Code,workStatus:workStatus,salary:salary,occupation:occupation,institutionName:institutionName};
        Register.create(newRegistration,function(err,newlyCreated){
            if(err)
            console.log(err);
            else
            res.redirect("/show");
        });
});
app.get("/show",function(req,res){
    Register.find({},function(err,allRegisters){
        if(err)
        console.log(err);
        else
        res.render("show",{registers:allRegisters});
    });
});
app.listen(3000,function(){
	console.log("ET server has started");
});