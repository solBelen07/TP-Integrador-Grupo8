import { InicioRegistro } from "./InicioRegistro.js";

const usuario = InicioRegistro.usuarioLogueado();

console.log(usuario);

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

const nombre = document.getElementById("form-perfil-nombre");
const apellido = document.getElementById("form-perfil-apellido");
const email = document.getElementById("form-perfil-email");
const pais = document.getElementById("form-perfil-pais");
const ciudad = document.getElementById("form-perfil-ciudad");
const dni = document.getElementById("form-perfil-dni");
const telefono = document.getElementById("form-perfil-telefono");
const fechaNacimiento = document.getElementById("form-perfil-fechaNac");

nombre.value = usuario.nombre;
apellido.value = usuario.apellido;
email.value = usuario.email;
pais.value = usuario.pais;
ciudad.value = usuario.ciudad;
dni.value = usuario.dni;
telefono.value = usuario.telefono;
fechaNacimiento.value = usuario.fechaNacimiento;

console.log(usuario);