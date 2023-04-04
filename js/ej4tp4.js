//* 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar
//* las propiedades código, nombre y precio, además del método imprime datos, el
//* cual escribe por pantalla los valores de sus propiedades.
//* Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
//* Por último, utilice el método imprime datos para mostrar por pantalla los valores
//* de los tres objetos instanciados.
let listaProductos = [];
class Producto {
    #codigo;
    #nombre;
    #precio;
  constructor(codigo, nombre, precio) {
    this.#codigo = codigo;
    this.#nombre = nombre;
    this.#precio = precio;
  }
  set codigo(nuevoCodigo) {
    if (nuevoCodigo.length > 0) {
      this.#codigo = nuevoCodigo;
    }
  }

  set nombre(nuevoNombre) {
    if (nuevoNombre.length > 0) {
      this.#nombre = nuevoNombre;
    }
  }
  set precio(nuevoPrecio) {
    if (nuevoPrecio.length > 0) {
      this.#precio = nuevoPrecio;
    }
  }
  imprimirDatos() {
    return document.write(`<ul>
        <li>Codigo: ${this.#codigo}</li>
        <li>Nombre: ${this.#nombre}</li>
        <li>Precio: ${this.#precio}</li>
        </ul>`);
  }
}
listaProductos.push(new Producto(01, "Azucar", 150));
listaProductos.push(new Producto(02, "Harina", 100));
listaProductos.push(new Producto(03, "Fideos", 50));
listaProductos.forEach(producto => {
    document.write(producto.imprimirDatos())
});