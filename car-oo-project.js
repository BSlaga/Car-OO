class Vehicle{
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        console.log('Beep.');
    }

    toString(){
        console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}.`);
    }
}

class Car extends Vehicle{
    constructor(make, model, year) {
        super(make, model, year)
        this.numWheels = 4
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine(){
        console.log('VROOOOOOMMMM!!!!')
    }
}

class Garage{
    constructor(size){   
        this.size = size; 
        this.vehicles = [];
    }

    
        
    add(newVehicle){
        if(!(newVehicle instanceof Vehicle)){
            return 'Only Vehicles are allowed';
        }
        if(this.vehicles.length >= this.size){
            return "Sorry we're full";
        }
        this.vehicles.push(newVehicle);
        return 'Vehicle added!';   
    }
}

