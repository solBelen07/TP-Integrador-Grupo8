const formulario = document.getElementById("form-busqueda-ida");
const mensajeError = document.getElementById("seccion-busqueda-error-ida");

const origen = document.getElementById("origen");
const destino = document.getElementById("destino");
const fechaIda = document.getElementById("fecha-ida");
const pasajero = document.getElementById("pasajero");
const clase = document.getElementById("clase");

formulario.addEventListener("submit", (e) => {
 
    e.preventDefault();

    if (!validarBusqueda()) {
        mensajeError.textContent = "Debe completar los campos para crear la busqueda.";
        return;
    }

    const busqueda = {
        origen: document.getElementById("origen").value,
        destino: document.getElementById("destino").value,
        fechaIda: document.getElementById("fecha-ida").value,
        fechaVuelta: "",
        pasajero: document.getElementById("pasajero").value,
        clase: document.getElementById("clase").value
    };

    console.log(busqueda);

    debugger;

    localStorage.setItem(
        "busqueda",
        JSON.stringify(busqueda)
    );

    window.location.href = "./busqueda.html";

    mensajeError.style.display = "none";

    
});

function validarBusqueda() {

    if (origen.value.trim() === "") {
        return false;
    }

    if (destino.value.trim() === "") {
        return false;
    }

    if (fechaIda.value === "") {
        return false;
    }

    if (pasajero.value === "" || pasajero.value <= 0) {
        return false;
    }

    return true;
}