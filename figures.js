//Square Code
console.group("Squares"); // to make groups in the console
// const lengthSquare = 5;
// console.log("Square sides length are: " + lengthSquare +"cm");

function squarePerimeter(side){
    return side * 4;    
} 

// console.log("The square perimeter is: " + lengthSquare + "cm");
function squareArea(side){
    return side * side;    
} 
// const squareArea = lengthSquare * lengthSquare;
// console.log("The square area is: " + squareArea + "cm^2");
console.groupEnd(); // To close the console group

//Triangle Code
console.group("Triangles");
// const sideTriangle1 = 6;
// const sideTriangle2 = 6;
// const baseTriangle = 4;

// console.log(
//     "The Triangle sides length are: " 
//     + sideTriangle1 
//     +"cm, "
//     + sideTriangle2
//     +"cm, "
//     + baseTriangle 
//     +"cm"
// );


// const triangleHeight= 5.5;
// console.log("The triangle Height is: " + triangleHeight + "cm")

function perimeterTriangle(side1, side2, base){
    return perimeter = (side1 + side2) + base;
}

// console.log("The triangle perimeter is: " + perimeterTriangle + "cm");

function triangleArea (base, height){
    return (base * height)/ 2;
}
// console.log("The triangle area is: " + triangleArea + "cm^2");

console.groupEnd();

//Circle Code
console.group("Circles");

// Radius
// const radiusCircle = 4;
// console.log("The radius Circle is: " + radiusCircle +"cm");

// Diameter
function diameterCircle (radius){
    return radius * 2;
}
// console.log("The diameter Circle is: " + diameterCircle +"cm");


// pi

const pi = Math.PI;// Math tool
console.log("PI is: " + pi );


// Circumference
function circlePerimeter (radius){
    const diameter = diameterCircle (radius);
    return diameter * pi;
}

// console.log("The Circle perimeter is: " + circlePerimeter +"cm");


// Area
function areaCircle(radius){
    return (radius*radius)*pi;
} 
// x`console.log("The Circle Area is: " + areaCircle +"cm");
console.groupEnd();



// Function for the button calculate perimeter and calculate the area
// Interactin with HTML

function calculatePerimeterSquare(){
    // find the place where the value will be submitted by the user.
    const input = document.getElementById("SquareInput"); 
    const value = input.value; // Received value by the user


    const perimeter = squarePerimeter(value);
    alert(perimeter);
}

function calculateAreaSquare(){
    const input = document.getElementById("SquareInput"); 
    const value = input.value; // Received value by the user

    const area = squareArea (value);
    alert (area);

}

// Triangle Interaction
function calculatePerimeterTriangle (){
    const input = document.getElementById("SideInput1"); 
    const side1 = Number(input.value);

    const input2 = document.getElementById("SideInput2");
    const side2 = Number(input2.value); 

    const input3 = document.getElementById("BaseInput");
    const base = Number(input3.value);

    const perimeter = perimeterTriangle(side1,side2,base);
    alert(perimeter);
}

function calculateAreaTriangle (){
    const input = document.getElementById("BaseInput");
    const base = Number(input.value);

    const input2 = document.getElementById("HeightInput");
    const height = Number(input2.value);

    const area = triangleArea (base,height);
    alert(area);
}

// Circle Interaction

function calculatePerimeterCircle (){
    const input = document.getElementById("CircleInput");
    const radius = Number(input.value);

    const perimeter = circlePerimeter (radius);
    alert(perimeter);
}

function calculateAreaCircle (){
    const input = document.getElementById("CircleInput");
    const radius = Number(input.value);

    const area = areaCircle(radius);
    alert(area);
}