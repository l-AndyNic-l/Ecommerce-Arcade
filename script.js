
let pantalla = document.getElementById("pantalla");
let identificador;
let numero;

function agregar(valor) {

    if (pantalla.value == 0 || pantalla.value == "Error División 0") {
        pantalla.value = valor;

    } else {
        pantalla.value += valor;
    };

};

function limpiar() {
    pantalla.value = 0;
};

function operacion(operador) {

    if(pantalla.value != "Error División 0" ) {
        numero = pantalla.value;
        identificador = operador;

        limpiar();
    };

};

function calcular() {
        
    if (identificador == '+') {
        pantalla.value = Number(numero) + Number(pantalla.value);
        return identificador = '';
    };

    if(identificador == '-') {
        pantalla.value = Number(numero) - Number(pantalla.value);
        return identificador = '';
    };

    if(identificador == '/') {
        if(Number(numero) > 0 & Number(pantalla.value) > 0) {
            pantalla.value = Number(numero) / Number(pantalla.value);

        } else {
            pantalla.value = "Error División 0";
        }

        return identificador = '';
    };

    if(identificador == '*') {
        pantalla.value = Number(numero) * Number(pantalla.value);
        return identificador = '';
    };

};