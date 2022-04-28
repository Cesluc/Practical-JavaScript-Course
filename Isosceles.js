function alturaIsosceles(ladoA, ladoB, ladoC){
    if (ladoA == ladoB){
        altura = (Math.sqrt((ladoA*ladoA)-((ladoC*ladoC)/4)));
        return console.log("La altura del triangulo isosceles es: "+ altura);
    } else if (ladoA == ladoC){
        altura = (Math.sqrt((ladoA*ladoA)-((ladoB*ladoB)/4)));
        return console.log("La altura del triangulo isosceles es: "+ altura);
    } else if (ladoB == ladoC){
        altura = (Math.sqrt((ladoB*ladoB)-((ladoA*ladoA)/4)));
        return console.log("La altura del triangulo isosceles es: "+ altura);
    } else {
        return ("El triangulo no es un isoceles");
    }
}