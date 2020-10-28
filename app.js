var nameuser = "john";
let lastname = "carter";

nameuser = 'pepe';

console.log(nameuser);

//las constantes a diferencia de las variables no cambian.
const PI=3.1416;

//las variables no pueden iniciar con numeros ni simbolos

//prueba con variables let

let x = 1;
if (true) {
    let x = 2;
    console.log(x);
    //nos imprimira el valor de x que en este bloque es 2
}
console.log(x);
//x aqui vale 1 nuevamente, pues esta fuera de la funcion anterior y su valor esta definido.