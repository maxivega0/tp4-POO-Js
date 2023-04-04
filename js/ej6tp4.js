//* 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
//* ● ISBN
//* ● Título
//* ● Autor
//* ● Número de páginas
//* Crear sus respectivos métodos get y set correspondientes para cada propiedad.
//* Crear el método mostrarLibro() para mostrar la información relativa al libro con el
//* siguiente formato:
//* “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
//* Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
//* Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

class Libro{
    constructor(isbn, titulo, autor, numPaginas){
        this._isbn = isbn;
        this._titulo = titulo;
        this._autor = autor;
        this._numPaginas = numPaginas;
    }

    get isbn(){
        return this._isbn;
    }
    set isbn(nuevoIsbn){
        return this._isbn = nuevoIsbn;
    }

    get titulo(){
        return this._titulo;
    }
    set titulo(nuevoTitulo){
        return this._titulo = nuevoTitulo;
    }

    get autor(){
        return this._autor;
    }
    set autor(nuevoAutor){
        return this._autor = nuevoAutor;
    }

    get numPaginas(){
        return this._numPaginas;
    }
    set numPaginas(nuevoNumPaginas){
        return this._numPaginas = nuevoNumPaginas;
    }

    mostrarLibro(){
        return document.write(`El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene páginas ${this.numPaginas} <br>`)
    }
}

const libroA = new Libro (458, '"El leon"', 'Garcia Marquez', 564)
const libroB = new Libro (782, '"El coyote"', 'Tomas Wajnerman', 387)

libroA.mostrarLibro();
libroB.mostrarLibro();

if (libroA.numPaginas > libroB.numPaginas) {
    document.write(`El libro ${libroA.titulo} tiene mas páginas`);
}else if (libroA.numPaginas < libroB.numPaginas){
    document.write(`El libro ${libroB.titulo} tiene mas páginas`);
}else{
    document.write(`Ambos libros tienen la misma cantidad de páginas`);
}