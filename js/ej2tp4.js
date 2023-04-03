//* Modelando clases
//* Cuenta bancaria - Dificultad: 🟢🟡
//* 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
//* ● Una propiedad titular con el valor "Alex".
//* ● Una propiedad saldo, teniendo como valor inicial 0.
//* ● Un método ingresar() que permita añadir dinero a la cuenta, pasando la
//* cantidad como parámetro
//* ● Un método extraer() que permita retirar la cantidad pasada como
//* parámetro.
//* ● Un método informar() que retorne la información del estado de la cuenta.
//* Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a
//* mostrar la descripción del estado de la cuenta.

let cuenta = {
    titular: 'Alex  Smith',
    saldo: 0,

    ingresar(){
        let deposito = parseFloat(prompt('Ingrese el monto a depositar en su cuenta.'))
        this.saldo = this.saldo + deposito;
    },
    extraer(){
        let extraccion = parseFloat(prompt('Ingrese el monto a extraer en su cuenta.'))
        this.saldo = this.saldo - extraccion;
    },
    informar(){
        document.write(`INFORME DE CUENTA<br>
        Cliente: ${this.titular}.<br>
        Saldo: $${this.saldo}.
        `)
    }
}
cuenta.ingresar();
cuenta.extraer();
cuenta.informar();