const vueloSeleccionado = JSON.parse(
    localStorage.getItem("vueloSeleccionado")
);

const contenedor = document.getElementById("seccion-div-resumen");

const precioFinal = vueloSeleccionado.precio + 259000;

contenedor.innerHTML = `
    <div class="div-resumen">
        <h2>RESUMEN</h2>
    
    <h3>${vueloSeleccionado.aerolinea}</h3>
    <h3>${vueloSeleccionado.origen} - ${vueloSeleccionado.destino}</h3>
    <p>Fecha Ida: ${vueloSeleccionado.fechaIda}</p>
    <p>Fecha Vuelta: ${vueloSeleccionado.fechaVuelta}</p>
    <p>Cantidad de Pasajeros: ${vueloSeleccionado.pasajero}</p>
    <p>Clase: ${vueloSeleccionado.clase}</p>
    <p>Cod. Vuelo: FBK6778</p>
    <div class="div-pasajero">
        <h3>${vueloSeleccionado.pasajero} PASAJERO $${vueloSeleccionado.precio.toLocaleString("es-AR")}</h3>
    </div>  
    <div class="div-impuesto">
        <h3>IMPUESTOS $259.000</h3>
    </div>
    <div class="div-total">
        <h2>TOTAL $${precioFinal.toLocaleString("es-AR")}</h2>
    </div>
    `;

const formulario = document.getElementById("form-detalle-vuelo");

formulario.addEventListener("submit", (e) => {

    const asientoSeleccionado =
        document.querySelector(
            'input[name="asiento"]:checked'
        );

    if (!asientoSeleccionado) {
        e.preventDefault();
        alert("Seleccione un asiento");
        return;
    }
})