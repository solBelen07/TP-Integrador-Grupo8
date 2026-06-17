import { InicioRegistro } from "./InicioRegistro.js";

const botonesRegistro =
    document.getElementById(
        "botones-registro"
    );

const perfil =
    document.querySelector(
        ".div-perfil-header"
    );

const usuario =
    InicioRegistro.usuarioLogueado();

if(usuario){

    botonesRegistro.style.display =
        "none";

    perfil.style.display =
        "flex";

}else{

    botonesRegistro.style.display =
        "flex";

    perfil.style.display =
        "none";

}

const formulario = document.getElementById("form-busqueda");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    const busqueda = {
        origen: document.getElementById("origen").value,
        destino: document.getElementById("destino").value,
        fechaIda: document.getElementById("fecha-ida").value,
        fechaVuelta: document.getElementById("fecha-vuelta").value,
        pasajero: document.getElementById("pasajero").value,
        clase: document.getElementById("clase").value
    };

    console.log(busqueda);

    debugger;

    localStorage.setItem(
        "busqueda",
        JSON.stringify(busqueda)
    );

    window.location.href = "./pages/busqueda.html";
});