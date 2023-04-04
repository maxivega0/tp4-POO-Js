
const eleccionMaquina = () => Math.floor(Math.random() * 3) + 1;
const eleccionUsuario = () => parseInt(prompt("Ingrese un numero del 1 al 3, Siendo 1 'piedra' - 2 'papel' - 3 'tijera'"));
let i = 1;
let usuario = 0;
let maquina = 0;
document.write(`<h1>Piedra: 1 - 
Papel: 2 - 
Tijera: 3</h1>`)
do 
{
    document.write(`<h4>Juego ${i}</h4><br>`);
    i++;
    usuario = eleccionUsuario();
    maquina = eleccionMaquina();
    document.write(`${usuario} vs ${maquina}: `)
    // if (eleccionusuario === 1)
    if (usuario === 1) {
        if (maquina === 1) {
            document.write(`Es un empate!<br>`);
        }else if (maquina === 2) {
            document.write(`Usted perdió!<br>`);
        }else{
            document.write(`Usted ganó!<br>`);
        }
    }
    if (usuario === 2) {
            if (maquina === 1) {
                document.write(`Usted ganó!<br>`);
            }else if (maquina === 2) {
                document.write(`Es un empate!<br>`);
            }else{
                document.write(`Usted perdió!<br>`);
            }
        }
    if (usuario === 3) {
            if (maquina === 1) {
                document.write(`Usted perdió!<br>`);
            }else if (maquina === 2) {
                document.write(`Usted ganó!<br>`);
            }else{
                document.write(`Es un empate!<br>`);
            }
        }
    document.write("<hr>")
}while(confirm(`Desea seguir jugando?`));