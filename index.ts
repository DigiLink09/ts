interface Drivable{
    speed:number;
    drive():string;
}

class Car implements Drivable{
   speed = 10;
   
   drive(){
    return `I am driving at${this.speed}`;
   }
}

const myCar = new Car();

const startDriving = (vehicle: Drivable) => {
    vehicle.drive();
};

startDriving(myCar);

