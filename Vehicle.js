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
    let 
  }

  function drive(h){
    milesDriven += (h*avg);

    fuel -= (m*h)

    if(f == 0){
      console.log("You are out of fuel");
      return f == 0;
    }
    else if(f > 0){
      console.log("You still have fuel");
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
