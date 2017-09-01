let Vehicle = function(e,f,g,avg,m){
  let engine = e;
  let fuel = f;
  let gastank = g;
  let averageMPG = avg;
  let milesDriven = m;

  function totalMiles(){
    return milesDriven;
  }

  function fuelLeft(){
    return fuel;
  }

  function fill(p){
    fuel += p;

    if(fuel > 1){
      fuel = 1;
    }
  }
  function drive(h){
    let burnedgas = h*engineEfficiency();

    if(burnedgas <= fuel ){
      milesDriven += h*avg;
      fuel -= h*engineEfficiency();
    }
    else{
      milesDriven += avg*fuel;
      fuel = 0;
    }
  }

  function engineEfficiency(){
    if(e == 4){
      return 1;
    }
    else if(e == 6){
      return 1.2;
    }
    else if(e == 8){
      return 1.36;
    }
    else{
      return console.log("That size engine is not available.");
    }
  }
  return{totalMiles,fuelLeft,fill,drive}
}

module.exports = Vehicle;
