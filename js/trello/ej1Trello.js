//* Crear un objeto persona que tenga las propiedades: nombre, apellido, edad, un valor verdadero o falso que indique si es estudiante y una lista de hobbies, este objeto debe contener los métodos para presentar a la persona, el cual mostrará todos los datos, y los métodos agregar, borrar y buscar un hobbie.Agregar por lo menos 3 hobbies y mostrarlos por pantalla, luego buscar el hobbie ‘viajar’ e indicar si la persona lo tiene o no. Por ultimo eliminar el primer hobbie y volver a mostrar todos por pantalla.

let persona = {
  nombre: "Benito",
  apellido: "Villamarin",
  edad: 20,
  estudiante: false,
  hobbies: ["Lectura", "videojuegos"],

  //* Metodos
  mostrarObjeto: function () {
    return document.write(
      `<p>Su nombre completo es ${this.nombre} ${this.apellido}, tiene ${
        this.edad
      } años y ${
        this.estudiante === true ? `es un estudiante.` : `no es un estudiante.`
      } <br>Sus hobbies son ${this.hobbies} </p>`
    );
  },
  agregarH: function () {
    let hobbie = prompt("Ingrese un hobbie nuevo");
    this.hobbies.push(hobbie);
  },
  borrarH: function () {
    alert(`La lista de hobbies es la siguiente: ${this.hobbies}`);
    let hobbie = prompt("¿Que hobbie desea borrar?");
    if (this.hobbies.includes(hobbie)) {
      let posicion = this.hobbies.indexOf(hobbie);
      this.hobbies.splice(posicion, 1);
    } else {
      document.write("El hobbie que desea eliminar no se encuentra.");
    }
  },
  buscarH: function () {
    let hobbie = prompt("Ingrese el hobbie a buscar.");
    let buscar = this.hobbies.find((element) => element === hobbie);
    if (buscar === hobbie) {
      document.write(`Se ha encontrado el hobbie '${hobbie}'.`);
    } else {
      document.write(`No se encontró el hobbie buscado.`);
    }
  },
  borrarPrimeroH: function () {
    this.hobbies.shift();
    return document.write(`<p>Sus hobbies son ${this.hobbies}.</p>`);
  },
};

persona.agregarH();
persona.agregarH();
persona.agregarH();
console.log(persona.hobbies);
persona.mostrarObjeto();
persona.borrarH();
console.log(persona.hobbies);
persona.buscarH();
console.log(persona.hobbies);
persona.borrarPrimeroH();
console.log(persona.hobbies);
