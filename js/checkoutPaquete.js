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