
let pantalla = document.getElementById("pantalla");
let identificador;
let numero;

function agregar(valor) {

    if (pantalla.value == 0) {
        pantalla.value = valor;

    } else {
        pantalla.value += valor;
    }

}

function limpiar() {
    pantalla.value = 0;
}

function sumar(operacion) {
    numero = pantalla.value;
    identificador = operacion;
    limpiar();
}

function restar(operacion) {
    numero = pantalla.value;
    identificador = operacion;
    limpiar();
}

function dividir(operacion) {
    numero = pantalla.value;
    identificador = operacion;
    limpiar();
}

function multiplicar(operacion) {
    numero = pantalla.value;
    identificador = operacion;
    limpiar();
}



function calcular() {
   
    if (identificador == '+') {
        pantalla.value = Number(numero) + Number(pantalla.value);
        identificador = '';
    } 

    if(identificador == '-') {
        pantalla.value = Number(numero) - Number(pantalla.value);
        identificador = '';
    }

    if(identificador == '/') {
        pantalla.value = Number(numero) / Number(pantalla.value);
        identificador = '';
    }

    if(identificador == '*') {
        pantalla.value = Number(numero) * Number(pantalla.value);
        identificador = '';
    }


}