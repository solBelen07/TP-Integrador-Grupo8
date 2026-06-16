const paquete = JSON.parse(
    localStorage.getItem("paqueteSeleccionado")
);

const equipajeBodega =
    localStorage.getItem("equipajeBodega") === "true";

if (paquete) {

    document.getElementById("div-resumen-destino").textContent =
        paquete.destino;  

    document.getElementById("div-pasajero-precio-final").textContent =
        `1 PASAJERO $${paquete.precio.toLocaleString("es-AR")}`;

    let precioFinal = paquete.precio;

    const divImpuesto = document.getElementById("div-impuesto");

    if (equipajeBodega) {
        precioFinal += 50000;
        divImpuesto.style.display = "block";
    } else {
        divImpuesto.style.display = "none";
    }

    document.getElementById("div-total-precio-final").textContent =
        `TOTAL : $${precioFinal.toLocaleString("es-AR")}`;
}

const botonContinuar = document.getElementById("boton-continuar");

botonContinuar.addEventListener("click", (e) => {

    const asientoSeleccionado = document.querySelector(
        'input[name="asiento"]:checked'
    );

    if (!asientoSeleccionado) {
        e.preventDefault();
        alert("Debes seleccionar un asiento antes de continuar.");
        return;
    }

    window.location.href = "./checkout-paquete.html";
});