import { Usuario } from "./Usuario.js";
import { InicioRegistro } from "./InicioRegistro.js";

const formulario =
    document.getElementById("registro-form");

formulario.addEventListener(
    "submit",
    (e) => {

        e.preventDefault();

        try {

            const usuario = new Usuario(
                pais.value,
                dni.value,
                nombre.value,
                apellido.value,
                fechaNacimiento.value,
                email.value,
                contrasenia.value
            );

            InicioRegistro.guardarUsuario(usuario);

            alert("Usuario registrado");

            window.location.href =
                "./login.html";

        } catch(error) {

            alert(error.message);
        }
    }
);