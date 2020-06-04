var express =require("express");
var cors = require("cors");
var corsOptions = {origin:"*",optionSucessStatus:200};
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors(corsOptions));


var personas = [{
  "id": 1,
  "make": "BMW",
  "model": "7 Series",
  "year": 2000
}, {
  "id": 2,
  "make": "Mazda",
  "model": "B-Series",
  "year": 2001
}, {
  "id": 3,
  "make": "Mitsubishi",
  "model": "Galant",
  "year": 1996
}, {
  "id": 4,
  "make": "Jensen",
  "model": "Interceptor",
  "year": 1967
}, {
  "id": 5,
  "make": "Ford",
  "model": "F250",
  "year": 2007
}, {
  "id": 6,
  "make": "Subaru",
  "model": "Baja",
  "year": 2006
}, {
  "id": 7,
  "make": "Volkswagen",
  "model": "Eos",
  "year": 2012
}, {
  "id": 8,
  "make": "Dodge",
  "model": "Neon",
  "year": 1995
}, {
  "id": 9,
  "make": "Dodge",
  "model": "Caliber",
  "year": 2011
}, {
  "id": 10,
  "make": "Chevrolet",
  "model": "Silverado 1500",
  "year": 2011
}, {
  "id": 11,
  "make": "Toyota",
  "model": "Camry",
  "year": 2004
}];
var id =11;



app.get("/autos",function(req,res){
   
 res.send(personas);    

        return;
   
   
    
});




app.listen(3000,function(){
    console.log("Api en el puerto 3000");
});