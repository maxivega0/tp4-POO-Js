//* Rectángulos
//* Dificultad: 🟢
//* 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las
//* propiedades de alto y ancho, mas los métodos necesarios para modificar y
//* mostrar sus propiedades, calcular el perímetro y el área

class Figura{
    #nombre;
    #altura;
    #base;
    constructor(nombre,altura,base){
        this.#nombre = nombre;
        this.#altura = altura;
        this.#base = base;
    }
    get nombre(){
        return this.#nombre
    }
    set nombre(nuevoNombre){
        if(nuevoNombre.length > 0){
            this.#nombre = nuevoNombre
        }
    }
    get altura(){
        return this.#altura
    }
    set altura(nuevoAltura){
        if(nuevoAltura.length > 0){
            this.#altura = nuevoAltura
        }
    }
    get base(){
        return this.#base
    }
    set base(nuevoBase){
        if(nuevoBase.length > 0){
            this.#base = nuevoBase
        }
    }
    mostrarInformacion(){
        document.write(`<ul>
        <li>Nombre: ${this.nombre} </li>
        <li>Altura: ${this.altura} </li>
        <li>Base: ${this.base} </li>
        </ul>`)
    }
    perimetro(){
        return this.altura * 2 + this.base * 2
    }
    area(){
        return this.altura * this.base
    }
}

const rectangulo = new Figura('Rectangulo', 5, 10)
rectangulo.mostrarInformacion(); 