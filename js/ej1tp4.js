//* 1- Crea un objeto llamado auto que tenga algunas características como el color,
//* marca, modelo y si está encendido o apagado. Crea los métodos necesarios para
//* permitir encender y apagar el auto.


let auto = {
    //* Propiedades = key:value
    color: 'Verde',
    marca: 'Ford',
    modelo: 'EcoSport',
    anio: '2023',
    puertas: 5,
    motor: '1.5',
    transmision: 'Manual 5 velocidades',

    //* Metodos
    encendido: function(){
        //* Como nombrar un atributo dentro del objeto(buena practica)
        document.write(`<p>Encendiendo su ${this.marca} ${this.modelo}.</p>`)
    },
    apagado: function(){
        document.write(`<p>Apagando su ${this.marca} ${this.modelo}.</p>`)}
    }
    auto.encendido();
    auto.apagado();