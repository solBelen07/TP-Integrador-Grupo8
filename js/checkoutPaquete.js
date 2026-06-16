const paquete = JSON.parse(
    localStorage.getItem("paqueteSeleccionado")
);

const equipajeBodega =
    localStorage.getItem("equipajeBodega") === "true";

if (paquete) {

    document.getElementById("seccion-resumen-destino").textContent =
        paquete.destino;  

    let precioFinal = paquete.precio;

    const incluyeBodega = document.getElementById("seccion-resumen-bodega");

    if (equipajeBodega) {
        precioFinal += 50000;
        incluyeBodega.style.display = "block";
    } else {
        incluyeBodega.style.display = "none";
    }

    document.getElementById("seccion-resumen-grid-total").textContent =
        `TOTAL : $${precioFinal.toLocaleString("es-AR")}`;
}

const opcionTarjeta = document.getElementById("opcion-tarjeta");
const opcionTransferencia = document.getElementById("opcion-transferencia");

function actualizarRequired() {

    if (opcionTarjeta.checked) {
        document.getElementById("tarjeta").required = true;
        document.getElementById("nombre-tarjeta").required = true;
        document.getElementById("mes").required = true;
        document.getElementById("anio").required = true;
        document.getElementById("codigo-seguridad").required = true;
        document.getElementById("documento-titular").required = true;
    }

    if (opcionTransferencia.checked) {
        document.getElementById("email-transferencia").required = true;
        document.getElementById("documento-transferencia").required = true;
    }

}

opcionTarjeta.addEventListener("change", actualizarRequired);
opcionTransferencia.addEventListener("change", actualizarRequired);

const formulario = document.getElementById("form-checkout");
const popup = document.getElementById("section-popup");

formulario.addEventListener("submit", (e) => {

    if (!formulario.checkValidity()) {
        return;
    }

    e.preventDefault();
    popup.style.display = "flex";
});