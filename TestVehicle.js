const Vehicle = require('./Vehicle.js');

function main(){
    //make two vehicles and take them for a spin.
    let flemcar = new Vehicle(4,1,1,22,0);
    console.log(flemcar.fuelLeft());
    flemcar.drive(2);
    console.log(flemcar.fuelLeft());
    console.log(flemcar.totalMiles());
    flemcar.fill(0.25);
    console.log(flemcar.fill());

    let flemtruck = new Vehicle(8,10,10,20,10)
    console.log(flemtruck.fuelLeft());
    flemtruck.drive(5)
    console.log(flemtruck.totalMiles());



}
//run the main method
main();
