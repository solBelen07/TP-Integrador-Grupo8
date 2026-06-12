import { InicioRegistro } from "./InicioRegistro.js";

const botonLogout = document.getElementById("boton-logout");

document.addEventListener(
    "click", (funcion) =>  {
        InicioRegistro.logout();

        window.location.href =
            "../index.html";
    }

)