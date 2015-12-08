var fs=require("fs");
var csv = fs.readFileSync("PDAC.csv")

function csvJSON(csv){
//console.log(typeof csv);
var lines=csv.split("\r");

  var lines=csv.split("\n");
  //var lines=csv.split('/');

  var result = [];
  var oil = [];
  var food = [];

  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

	  var obj = {};
    lines[i]=lines[i].replace("Annual,","Annual");
    lines[i]=lines[i].replace("\"Annual Ending mar Of Each Year\"","Annual Ending mar Of Each Year");
	  var currentline=lines[i].split(",");

    if(currentline[0].indexOf("Oilseeds")!=-1)
    {

      obj[headers[0]] = currentline[0];
      obj[headers[23]] = currentline[23];
      oil.push(obj);
    }
    if(currentline[0].indexOf("Foodgrains")!=-1)
    {

      obj[headers[0]] = currentline[0];
      obj[headers[23]] = currentline[23];
      food.push(obj);
    }
	  for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	  }

	  result.push(obj);
    //console.log(result);

  }

 // return JSON.stringify(result);
 fs = require('fs')
 fs.writeFile('PDAC.json', JSON.stringify(result).replace(/\\n|\\/g, ''), function (err,data) {
   if (err) {
     return console.log(err);
   }
   console.log("PDAC created");
 });
 fs.writeFile('Oilseeds.json', JSON.stringify(result).replace(/\\n|\\/g, ''), function (err,data) {
   if (err) {
     return console.log(err);
   }
   console.log("Foodgrains created");
 });
}
var json=csvJSON(csv.toString());
//var str = json.replace("/");
