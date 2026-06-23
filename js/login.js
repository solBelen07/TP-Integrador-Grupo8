import { InicioRegistro } from "./InicioRegistro.js";

const formulario = document.getElementById("login-form");

const email = document.getElementById("email");
const contraseña = document.getElementById("contraseña");
const mensajeError = document.getElementById("mensaje-error");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    mensajeError.textContent = "";

    if (email.value.trim() === "") {
        mensajeError.textContent = "Ingrese un email";
        return;
    }

    if (contraseña.value.trim() === "") {
        mensajeError.textContent = "Ingrese una contraseña";
        return;
    }

    try {

        InicioRegistro.login(
            email.value,
            contraseña.value
        );

        mensajeError.textContent = "Sesión iniciada";

        setTimeout(() => {
            window.location.href = "../index.html";
        }, 1000);

    } catch (error) {

        mensajeError.textContent = error.message;

    }
});