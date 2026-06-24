import { Usuario } from "./Usuario.js";
import { InicioRegistro } from "./InicioRegistro.js";

const formulario = document.getElementById("registro-form");
const mensajeError = document.getElementById("mensaje-error");
const pais = document.getElementById("pais");
const dni = document.getElementById("dni");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const fechaNacimiento = document.getElementById("fecha-nacimiento");
const email = document.getElementById("email");
const contrasenia = document.getElementById("contrasenia");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    mensajeError.textContent = "";

    if (pais.value === "") {
        mensajeError.textContent = "Seleccione un país";
        return;
    }

    if (dni.value.trim() === "" || dni.value.length < 7) {
        mensajeError.textContent = "Ingrese un DNI válido";
        return;
    }

    if (nombre.value.trim() === "") {
        mensajeError.textContent = "Ingrese un nombre";
        return;
    }

    if (apellido.value.trim() === "") {
        mensajeError.textContent = "Ingrese un apellido";
        return;
    }

    if (fechaNacimiento.value === "") {
        mensajeError.textContent = "Ingrese una fecha de nacimiento";
        return;
    }

    if (email.value.trim() === "") {
        mensajeError.textContent = "Ingrese un email";
        return;
    }

    if (contrasenia.value.length < 6) {
        mensajeError.textContent =
            "La contraseña debe tener al menos 6 caracteres";
        return;
    }

    try {

        const usuario = new Usuario(
            pais.value,
            dni.value,
            nombre.value,
            apellido.value,
            fechaNacimiento.value,
            email.value,
            contrasenia.value,
            "", 
            "",
        );

        InicioRegistro.guardarUsuario(usuario);

        mensajeError.textContent =
            "Usuario registrado correctamente";

        setTimeout(() => {
            window.location.href = "./login.html";
        }, 1000);

    } catch (error) {

        mensajeError.textContent = error.message;
    }
});