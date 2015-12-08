var fs=require("fs");
var csv = fs.readFileSync("PDAC.csv")

function csvJSON(csv){
//console.log(typeof csv);
  var lines=csv.split("\n");
  //var lines=csv.split('/');
  //var lines=csv.split("\r");

  var result = [];

  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

	  var obj = {};
    lines[i]=lines[i].replace("Annual,","Annual");
    lines[i]=lines[i].replace("\"Annual Ending mar Of Each Year\"","Annual Ending mar Of Each Year");
    var currentline=lines[i].split(",");
    if(currentline[0].indexOf("Rice")!=-1)
    {
        if(currentline[0].indexOf("Volume")!=-1){
          if((currentline[0].indexOf("Karnataka")!=-1)||(currentline[0].indexOf("Kerala")!=-1)||(currentline[0].indexOf("Andhra")!=-1)||(currentline[0].indexOf("Tamil")!=-1))
          {

      for(var j=0;j<headers.length;j++){
  		  obj[headers[j]] = currentline[j];
  	  }
      result.push(obj);
    }
    }
	  }




  }
  console.log(result.length);
 // return JSON.stringify(result);
 fs = require('fs')
 fs.writeFile('states.json', JSON.stringify(result).replace(/\\n|\\/g, ''), function (err,data) {
   if (err) {
     return console.log(err);
   }
   console.log("completed");
 });

}
var json=csvJSON(csv.toString());
//var str = json.replace("/");
