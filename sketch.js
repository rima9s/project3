//Excercise 1
var weatherData;
var perAreaWeather =[];
var areanames;

function preload() {
  data = loadJSON("weatherPerArea.json")
}

function setup(){
  var allAreaList = data.weatherLists;

  //format into array for use in index
  for(var i=0; i < weatherLists.length; i++) {
    print(allAreaList[i]);
    var areanames = allAreaList[i];
    for(var j = 0; j < allAreaList.length; j++){
      perAreaWeather[i] = areanames[j];
    }
  }
}

function draw() {
  //do formatting table in HTML INSTEAD

  // background(0);
  // fill(255);
  //
  // if(bartData){
  //   train1min = bartData.root.station[0].etd[0].estimate[0].minutes;
  //   text(train1min,150,50);
  //
  //   if(train1min<10){
  //     fill(255,0,0);
  //   }
  //   if(train1min<20&&train1min>10){
  //     fill(255,255,0);
  //   }
  //   if(train1min<60&&train1min>20){
  //     fill(0,255,0);
  //   }
  //   rect(100,300,50,train1min*5);
  //
  //
  //
  //   train2min = bartData.root.station[0].etd[0].estimate[1].minutes;
  //
  //   if(train2min<10){
  //     fill(255,0,0);
  //   }
  //   if(train2min<20&&train2min>10){
  //     fill(255,255,0);
  //   }
  //   if(train2min<60&&train2min>20){
  //     fill(0,255,0);
  //   }
  //   text(train2min,200,50);
  //   rect(200,300,50,train2min*5);
  //
  //
  //
  //
  //   train3min = bartData.root.station[0].etd[0].estimate[2].minutes;
  //
  //   if(train3min<10){
  //     fill(255,0,0);
  //   }
  //   if(train3min<20&&train3min>10){
  //     fill(255,255,0);
  //   }
  //   if(train3min<60&&train3min>20){
  //     fill(0,255,0);
  //   }
  //   text(train3min,250,50);
  //   rect(300,300,50,train3min*5);
  // }

}
