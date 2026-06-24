import { InicioRegistro } from "./InicioRegistro.js";

const usuario = InicioRegistro.usuarioLogueado();


if(usuario){

    document.getElementById("form-perfil-nombre").value = usuario.nombre;

    document.getElementById("form-perfil-apellido").value = usuario.apellido;

    document.getElementById("form-perfil-email").value = usuario.email;

    document.getElementById("form-perfil-pais").value = usuario.pais;

    document.getElementById("form-perfil-ciudad").value = usuario.ciudad;

    document.getElementById("form-perfil-dni").value = usuario.dni;

    document.getElementById("form-perfil-telefono").value = usuario.telefono;

    document.getElementById("form-perfil-fechaNac").value = usuario.fechaNacimiento;
}

document.getElementById("form-perfil-email").readOnly = true;

const formulario = document.getElementById("form-perfil-info");

const nombre = document.getElementById("form-perfil-nombre");
const apellido = document.getElementById("form-perfil-apellido");
const email = document.getElementById("form-perfil-email");
const pais = document.getElementById("form-perfil-pais");
const ciudad = document.getElementById("form-perfil-ciudad");
const dni = document.getElementById("form-perfil-dni");
const telefono = document.getElementById("form-perfil-telefono");
const fechaNacimiento = document.getElementById("form-perfil-fechaNac");

const errorForm = document.getElementById("error-form");

formulario.addEventListener("submit", (e) =>{

    e.preventDefault();

    if(!validacionForm()){
        errorForm.textContent = "Todos los campos deben estar llenos.";

        return;
    }

    if(validacionForm()){
        usuario.nombre = nombre.value;
        usuario.apellido = apellido.value;
        usuario.email = email.value;
        usuario.pais = pais.value;
        usuario.ciudad = ciudad.value;
        usuario.dni = dni.value;
        usuario.telefono = telefono.value;
        usuario.fechaNacimiento = fechaNacimiento.value;

        localStorage.setItem("usuarioLogueado", JSON.stringify(usuario));

        const usuarios = InicioRegistro.obtenerUsuarios();

        const indice = usuarios.findIndex(
            u => u.email === usuario.email
        );

        if(indice !== -1){
            usuarios[indice] = usuario;
        }

        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        errorForm.style.display = "none";

    }

})

function validacionForm(){

     if (nombre.value.trim() === "") {
        return false;
    }

    if (apellido.value.trim() === "") {
        return false;
    }

    if (email.value.trim() === "") {
        return false;
    }

    if (pais.value.trim() === "") {
        return false;
    }

    if (ciudad.value.trim() === "") {
        return false;
    }

    if (dni.value.trim() === "") {
        return false;
    }

    if (telefono.value.trim() === "") {
        return false;
    }

    if (fechaNacimiento.value === "") {
        return false;
    }

    return true;
}

console.log(usuario);