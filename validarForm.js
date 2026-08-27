let formulario = document.getElementById("contacto");
let nombre = document.getElementById("nombre");
let rut = document.getElementById("rut");
let correo = document.getElementById("correo");
let telefono = document.getElementById("telefono");

formulario.addEventListener("submit",function(event){
    event.preventDefault();
    if(!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value)){
        alert("El nombre debe contener solo letras");
        nombre.focus();
        return
    };

    if(!/^[0-9]{1,2}\.[0-9]{3}\.[0-9]{3}-[0-9kK]$/.test(rut.value)){
        alert("Debe ingresar un Rut válido");
        rut.focus();
        return
    };

    if(!/^[^\s@]+@(gmail|outlook)\.com|(duocuc)\.cl$/.test(correo.value)){
        alert("Debe ingresar un correo válido");
        correo.focus();
        return
    };

   if (!/^\+569[0-9]{8}$/.test(telefono.value)) {
        alert("El telefono debe tener formato +569xxxxxxxx");
        telefono.focus();
        return
    };

    // Validar la edad
    let fechaNac = new Date(document.getElementById("fenac").value);
    let actual = new Date();
    let edad = actual.getFullYear() - fechaNac.getFullYear();

    if (edad < 18) {
        alert("Debes ser mayor de edad para registrarte");
        fenac.focus();
        return;
    };

    alert("Formulario enviado correctamente");
    nombre.value = "";
    rut.value = "";
    correo.value = "";
    telefono.value = "";
    fechaNac.value = "";

});