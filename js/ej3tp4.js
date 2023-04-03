//* Rectángulos
//* Dificultad: 🟢
//* 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las
//* propiedades de alto y ancho, mas los métodos necesarios para modificar y
//* mostrar sus propiedades, calcular el perímetro y el área
let alturaUsuario, baseUsuario;
class Rectangulo{
    constructor(altura,base){
        this.altura = altura;
        this.base = base;
    }
    mostrarInformacion(){
        document.write(`<ul>
        <li>Altura: ${this.altura} </li>
        <li>Base: ${this.base} </li>
        </ul>`)
    }
    perimetro(){
        return document.write(`El perimetro del rectangulo es de: ${this.altura * 2 + this.base * 2}<br>`)
    }
    area(){
        return document.write(`El area del rectangulo es de: ${this.altura * this.base} `)
    }
}
function crearRectangulo(objeto, altura, base) {
    objeto.altura = altura;
    objeto.base = base;
}
const rectangulo = new Rectangulo();
alturaUsuario = Number(prompt("Ingrese la altura."));
baseUsuario = Number(prompt("Ingrese la base."));
crearRectangulo(rectangulo, alturaUsuario,baseUsuario);
rectangulo.mostrarInformacion();
rectangulo.perimetro();
rectangulo.area();
