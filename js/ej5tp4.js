/* 5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura,
anio de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué
generación pertenece la persona creada y cual es el rasgo característico de esta
generación.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la
persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/

class persona {
    constructor(nombre, edad, sexo, peso, altura, anio, dni) {
      this._nombre = nombre;
      this._edad = edad;
      this._sexo = sexo;
      this._peso = peso;
      this._altura = altura;
      this._anio = anio;
      this._dni = dni || this.generarDNI();
    }
    set nombre(nuevoNombre) {
      if (nuevoNombre != null) {
        return (this._nombre = nuevoNombre);
      }
    }
    get nombre() {
      return this._nombre;
    }
    set edad(nuevaEdad) {
      if (nuevaEdad > 0) {
        return (this._edad = nuevaEdad);
      }
    }
    get edad() {
      return this._edad;
    }
    set sexo(nuevoSexo) {
      if (nuevoSexo == `H` || nuevoSexo == `M`) {
        return (this._sexo = this.nuevoSexo);
      }
    }
    get sexo() {
      return this._sexo;
    }
    set peso(nuevoPeso) {
      if (nuevoPeso > 30) {
        return (this._peso = nuevoPeso);
      }
    }
    get peso() {
      return this._peso;
    }
    set altura(nuevaAltura) {
      if (nuevaAltura > 100) {
        return (this._altura = nuevaAltura);
      }
    }
    get altura() {
      return this._altura;
    }
    set anio(nuevoanio) {
      if (nuevoanio >= 1930 && nuevoanio < 2024) {
        return (this._anio = nuevoanio);
      }
    }
    get anio() {
      return this._anio;
    }
    set dni(nuevoDni) {
      if (nuevoDni !== undefined) {
        this._dni = nuevoDni;
      }
    }
    get dni() {
      return this._dni;
    }
    mostrarGeneracion() {
      if (this.anio >= 1994 && this.anio <= 2010) {
          document.write("<br>Pertenece a la generacion: Z");
          document.write("<br>Rasgo caracteristico: Irreverencia");
      } else if (this.anio >= 1981 && this.anio <= 1993) {
          document.write("<br>Pertenece a la generacion: Y (millennials)");
          document.write("<br>Rasgo caracteristico: Frustracion");
      } else if (this.anio >= 1969 && this.anio <= 1980) {
          document.write("<br>Pertenece a la generacion: X");
          document.write("<br>Rasgo caracteristico: Obsesion por el Exito");
      } else if (this.anio >= 1949 && this.anio <= 1968) {
          document.write("<br>Pertenece a la generacion: Baby Boom");
          document.write("<br>Rasgo caracteristico: Ambicion");
      } else {
          document.write("<br>Pertenece a la generacion: Silent Generation (Los niños de la posguerra)");
          document.write("<br>Rasgo caracteristico: Austeridad");
      }
  }    esMayorDeEdad() {
      if (this.edad >= 18) {
          document.write(`<br> ${this.nombre} Es mayor de edad`);
      } else {
          document.write(`<br> ${this.nombre} No es mayor de edad`);
      }
  }
  mostrarDatos() {
      return document.write(`<ul>
          <li>Nombre: ${this.nombre}</li>
          <li>Edad: ${this.edad}</li>
          <li>Sexo: ${this.sexo}</li>
          <li>Peso: ${this.peso}</li>
          <li>Altura: ${this.altura}</li>
          <li>Año: ${this.anio}</li>
          <li>DNI: ${this.dni}</li>
          </ul>`);
  }
  generarDNI() {
  let documento = Math.floor(Math.random() * (99999999 - 10000000) + 10000000);
  return documento;
  }
  }
  const gerardo = new persona("Gerardo", 20, "M", 80, 170,2002,16746093);
  gerardo.esMayorDeEdad();
  gerardo.mostrarGeneracion();
  gerardo.mostrarDatos();
  const maria = new persona("Maria", 31,"F",58,160,1992);
  maria.esMayorDeEdad();
  maria.mostrarGeneracion();
  maria.mostrarDatos();