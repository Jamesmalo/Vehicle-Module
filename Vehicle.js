let Vehicle = function(e,f,g,avg,m){
  let engine = e;
  let fuel = f;
  let gastank = g;
  let averageMPG = avg;
  let milesDriven = m;

  function totalMiles(){

  }

  function fuelLeft(){

  }

  function fill(p){

  }
  function drive(h){
    let burnedgas = h*engineEfficiency()
    fuel -= burnedgas;

    if(fuel == 0){
      milesDriven += h*avg;
    }
    else if(fuel > 0){
      milesDriven += h*avg;

    }
    else if(fuel =< 0){
      //milesDriven to do
      fuel =0;
    }
  }

  function engineEfficiency(){
    if(e == 4){
      return 1;
    }
    if else(e == 6){
      return 1.2;
    }
    if else(e == 8){
      return 1.36;
    }
    else{
      return console.log("null");
    }
  }
  return{totalMiles,fuelLeft,fill,drive}
}
