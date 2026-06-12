import { InicioRegistro } from "./InicioRegistro.js";

debugger;


console.log("index.js cargado");

const botonesRegistro =
    document.getElementById(
        "botones-registro"
    );

const perfil =
    document.querySelector(
        ".div-perfil-header"
    );

console.log(botonesRegistro);
console.log(perfil);

const usuario =
    InicioRegistro.usuarioLogueado();


console.log(usuario);

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