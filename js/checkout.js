const vueloSeleccionado = JSON.parse(
    localStorage.getItem("vueloSeleccionado")
);

const contenedor = document.getElementById("seccion-resumen");

let precioFinal = vueloSeleccionado.precio + 259000;

contenedor.innerHTML = `
    <div class="div-resumen">
        <h2>RESUMEN</h2>
        <h3>${vueloSeleccionado.aerolinea}</h3>
        <h3>${vueloSeleccionado.origen} - ${vueloSeleccionado.destino}</h3>
    </div>
    <div class="seccion-resumen-grid-resumen-viaje">
    <p>Fecha Ida: ${vueloSeleccionado.fechaIda}</p>
    <p>Fecha Vuelta: ${vueloSeleccionado.fechaVuelta}</p>
    <p>Cantidad de Pasajeros: ${vueloSeleccionado.pasajero}</p>
    <p>Clase: ${vueloSeleccionado.clase}</p>
    <p>Cod. Vuelo: FBK6778</p>
    </div>
    <div class="seccion-resumen-grid-descuento">
        <input placeholder="Ingrese Cupon" id="cupon" type="text"><br>
        <button type="button" class="boton-aplicar">Aplicar</button>
    </div>
    <div class="seccion-resumen-grid-total">
        <h2>TOTAL $${precioFinal.toLocaleString("es-AR")}</h2>
    </div>
`;

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

     console.log(popup);

    if (!formulario.checkValidity()) {
        return;
    }

    e.preventDefault();
    popup.style.display = "flex";
});
