let formulario = document.getElementById(contacto);
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
    }

    if(/^[0-9]{1,2}\.[0-9]{3}-[0-9kK]$/.test(rut.value)){
        alert("Debe ingresar un Rut válido")
        rut.focus();
        return
    }

    if(/^[^\s@]+@(gmail|duocuc|outlook).com|.cl$/.test(correo.value)){
        alert("Debe ingresar un correo válido")
        rut.focus();
        return
    }

    if(/^\+56 [0-9]{9}/.test(telefono.value)){
        alert("El telefono debe contener solo numeros");
        numero.focus();
        return
    }


});