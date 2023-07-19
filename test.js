const Cars = [];

const car1 = {
    "Model": "Camry",
    "Brand": "Toyota",
    "Engine size": "2.5 liters",
    "Shape": "Sedan",
    "Doors": 4
};

const car2 = {
    "Model": "3 Series",
    "Brand": "BMW",
    "Engine size": "2.0 liters",
    "Shape": "Sedan",
    "Doors": 4
};

const car3 = {
    "Model": "Mustang",
    "Brand": "Ford",
    "Engine size": "5.0 liters",
    "Shape": "Coupe",
    "Doors": 2
};

const car4 = {
    "Model": "Civic",
    "Brand": "Honda",
    "Engine size": "1.5 liters",
    "Shape": "Hatchback",
    "Doors": 5
};

const car5 = {
    "Model": "E-Class",
    "Brand": "Mercedes",
    "Engine size": "3.0 liters",
    "Shape": "Wagon",
    "Doors": 5
};

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
    rl.question("Enter the shape to search for (or 'exit' to quit): ", (shape) => {
        if (shape.toLowerCase() === 'exit'){
            rl.close();
        } else {
        const carWithShape = findCarByShape(shape.toLowerCase());
        if (carWithShape.length > 0){
            console.log(carWithShape);
        }   else {
            console.log("No vehicle of the shape " + shape + " is within the list.");
        }
        searchForCarShape();
    }
    });
}
searchForCarShape();