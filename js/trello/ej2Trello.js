//* Crear un objeto calculadora, con las propiedades y métodos necesarios para realizar las operaciones de suma, resta, multiplicación y división. Mostrar por pantalla 2 operaciones con cada método.
let calculadora = {
    color: 'Negra',
    tipo: 'Cientifica',
    
    suma(a,b){
        return document.write(` La suma es de: ${a + b}<br>`)
    },
    resta(a,b){
        return document.write(` La resta es de: ${a - b}<br>`)
    },
    multiplicacion(a,b){
        return document.write(` La multiplicacion es de: ${a * b}<br>`)
    },
    division(a,b){
        return document.write(` La division es de: ${a / b}<br>`)
    }
}

calculadora.suma(2,4);
calculadora.suma(3,7);
calculadora.multiplicacion(3,4);
calculadora.multiplicacion(3,9);