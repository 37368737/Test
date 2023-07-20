const Cars = [];

class Car{
    constructor(model, brand, engineSize, shape, doors){
        this.Model = model;
        this.Brand = brand;
        this["Engine size"] = engineSize;
        this.Shape = shape;
        this.Doors = doors;
    }
}

const car1 = new Car("Camry", "Toyota", "2.5 liters", "Sedan", 4);
const car2 = new Car("3 Series", "BMW", "2.0 liters", "Sedan", 4);
const car3 = new Car("Mustang", "Ford", "5.0 liters", "Coupe", 2);
const car4 = new Car("Civic", "Honda", "1.5 liters", "Hatchback", 5);
const car5 = new Car("E-Class", "Mercedes", "3.0 liters", "Wagon", 5);

Cars.push(car1);
Cars.push(car2);
Cars.push(car3);
Cars.push(car4);
Cars.push(car5);

console.log(Cars);
function amountOfCars(){
    let num = Cars.length;
    return num;
}
function getTotalDoors(){
let totalDoors = 0;
    for (let i = 0; i < Cars.length; i++){
        totalDoors += Cars[i].Doors;
    }
    let averageDoors = totalDoors / Cars.length;
    return {totalDoors, averageDoors};
}
const countCars = amountOfCars();
console.log("Number of Cars: ", countCars);
const {totalDoors, averageDoors} = getTotalDoors();
console.log("Total number of Doors: ", totalDoors);
console.log("Average number of Doors per car: ", averageDoors);

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findCarByShape(shape){
    const allCars = [];
    for (let i = 0; i < Cars.length; i++){
        if (Cars[i].Shape.toLowerCase() === shape.toLowerCase()){
            allCars.push(Cars[i]);
        }
        }
        return allCars;
    }

    function searchForCarShape() {
    rl.question("Enter the shape to search for: ", (shape) => {
        const carWithShape = findCarByShape(shape.toLowerCase());
        if (carWithShape.length > 0){
            console.log(carWithShape);
            rl.close();

        }   else {
            console.log("No vehicle of the shape " + shape + " is within the list.");
            rl.close();

        }
    });
}
searchForCarShape();