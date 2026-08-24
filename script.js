let pantalla = document.getElementById("pantalla");
let calculo;
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
        calculo = operador;

        limpiar();
    };

};

function calcular() {
        
    if (calculo == '+') {
        pantalla.value = Number(numero) + Number(pantalla.value);
        return calculo = '';
    };

    if(calculo == '-') {
        pantalla.value = Number(numero) - Number(pantalla.value);
        return calculo = '';
    };

    if(calculo == '/') {
        if (Number(pantalla.value) !== 0) {
            pantalla.value = Number(numero) / Number(pantalla.value);
        } else {
            pantalla.value = "Error División 0";
        }
        return calculo = '';
    }
    

    if(calculo == '*') {
        pantalla.value = Number(numero) * Number(pantalla.value);
        return calculo = '';
    };

};
