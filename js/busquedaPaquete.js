const paquete = JSON.parse(
    localStorage.getItem("paqueteSeleccionado")
);

if(paquete){

    document.getElementById("info-vuelo-arelinea").textContent =
        paquete.aerolinea;

    document.getElementById("info-vuelo-destino").textContent =
        paquete.destino;

    document.getElementById("info-vuelo-duracion").textContent =
        `${paquete.dias} días y ${paquete.noches} noches`;

    document.getElementById("info-vuelo-hotel").textContent =
        paquete.hotel;

    document.getElementById("precio-final").textContent =
        `$${paquete.precio.toLocaleString("es-AR")}`;
}

const  bodega = document.getElementById("bodega");


localStorage.setItem("equipajeBodega", JSON.stringify(false));

bodega.addEventListener("change", () => {

    let precioFinal = paquete.precio;

    if (bodega.checked) {
        precioFinal += 50000;
    }

    localStorage.setItem(
        "equipajeBodega",
        JSON.stringify(bodega.checked)
    );

    document.getElementById("precio-final").textContent =
        `$${precioFinal.toLocaleString("es-AR")}`;
});

