import { InicioRegistro } from "./InicioRegistro.js";

const formulario =
    document.getElementById("login-form");

formulario.addEventListener("submit", (e) => {

        e.preventDefault();

        try {

            InicioRegistro.login(
                email.value,
                contraseña.value
            ); 

            alert("Sesión iniciada");

            window.location.href =
                "../index.html";

        } catch(error) {

            alert(error.message);

        }
    }
);