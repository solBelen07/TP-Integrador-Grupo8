const formulario = document.getElementById("form-busqueda");
const origen = document.getElementById("origen");
const destino = document.getElementById("destino");
const fechaIda = document.getElementById("fecha-ida");
const pasajero = document.getElementById("pasajero");
const mensajeError = document.getElementById("seccion-busqueda-error");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    mensajeError.textContent = "";

    if (origen.value.trim() === "") {
        mensajeError.textContent = "Ingrese un origen";
        return;
    }

    if (destino.value.trim() === "") {
        mensajeError.textContent = "Ingrese un destino";
        return;
    }

    if (fechaIda.value === "") {
        mensajeError.textContent = "Seleccione una fecha";
        return;
    }

    if (pasajero.value === "" || pasajero.value <= 0) {
        mensajeError.textContent = "Ingrese la cantidad de pasajeros";
        return;
    }

    formulario.submit();
});