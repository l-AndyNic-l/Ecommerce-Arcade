let formulario = document.getElementById("contacto");
let nombre = document.getElementById("nombre");
let rut = document.getElementById("rut");
let email = document.getElementById("correo");
let telefono = document.getElementById("telefono");
let fechaNacimiento = document.getElementById("fenac");


formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value)) {
        alert("El nombre debe contener solo letras!");
        nombre.focus();
        return;
    };

    if (!/^[0-9]{7,8}-[0-9kK]$/.test(rut.value)) {
        alert("Debe ser un rut válido!");
        rut.focus();
        return;
    };

    if (!/^[^\s@]+@(duocuc|gmail|outlook)\.(com|cl)$/.test(email.value)) {
        alert("El email debe ser de un dominió válido!");
        email.focus();
        return;
    };

    if (!/^\+56[0-9]{9}$/.test(telefono.value)) {
        alert("El teléfono debe tener formato +56XXXXXXXXX!");
        telefono.focus();
        return;
    };

    // Calcular la edad:
    let nacimiento = new Date(fechaNacimiento.value);
    let fecha_actual = new Date();
    let edad = fecha_actual.getFullYear() - nacimiento.getFullYear();

    if (edad < 18) {
        alert("Debe ser mayor de 18 años para comprar!");
        fechaNacimiento.focus();
        return;
    };

    alert("Formulario enviado con exito!");
    nombre.value = "";
    rut.value = "";
    email.value = "";
    telefono.value = "";
    fechaNacimiento.value = "";

});