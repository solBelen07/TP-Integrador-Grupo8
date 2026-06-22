const paquete = JSON.parse(
    localStorage.getItem("paqueteSeleccionado")
);

let precioFinal = paquete.precio;
const equipajeBodega =
    localStorage.getItem("equipajeBodega") === "true";

if (paquete) {

    document.getElementById("seccion-resumen-destino").textContent =
        paquete.destino;  

    

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

        document.getElementById("email-transferencia").required = false;
        document.getElementById("documento-transferencia").required = false;
    }

    if (opcionTransferencia.checked) {
        document.getElementById("email-transferencia").required = true;
        document.getElementById("documento-transferencia").required = true;

        document.getElementById("tarjeta").required = false;
        document.getElementById("nombre-tarjeta").required = false;
        document.getElementById("mes").required = false;
        document.getElementById("anio").required = false;
        document.getElementById("codigo-seguridad").required = false;
        document.getElementById("documento-titular").required = false;
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


const cupon = document.getElementById("cupon");
const btnCupon = document.querySelector(".boton-aplicar");

btnCupon.addEventListener("click", () => {

    const codigo = cupon.value.trim();

    if (codigo === "123456") {

        precioFinal = precioFinal * 0.90;

        document.querySelector(
            ".seccion-resumen-grid-total h2"
        ).textContent =
            `TOTAL $${precioFinal.toLocaleString("es-AR")}`;

        alert("Cupón aplicado correctamente");
    }
    else {
        alert("Cupón inválido");
    }
});