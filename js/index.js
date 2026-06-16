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