let formulario = document.getElementById("contacto");
let nombre = document.getElementById("nombre");
let rut = document.getElementById("rut");
let email = document.getElementById("correo");
let telefono = document.getElementById()

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value)) {
        alert("El nombre debe contener solo letras");
        nombre.focus();
        return;
    }

    if (!/^[0-9]{7,8}-[0-9kK]$/.test(rut.value)) {
        alert("Debe ser un rut válido");
        rut.focus();
        return;
    }

    if (!/^[^\s@]+@duocuc\.com$/.test(email)) {
        alert("El email debe ser del dominio '@duocuc.cl'");
        email.focus();
        return;
    }



});