const paquete = JSON.parse(
    localStorage.getItem("paqueteSeleccionado")
);

let precioFinal = paquete.precio;
const equipajeBodega = JSON.parse(localStorage.getItem("equipajeBodega"));

function aplicaBodega(){

    if (equipajeBodega) {

        return true;
    }

}

if(aplicaBodega){

    precioFinal += 50000;

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

const cupon = document.getElementById("cupon");
const btnCupon = document.querySelector(".boton-aplicar");
const btnDeshacer = document.querySelector(".boton-deshacer");
const errorCupon = document.getElementById("error-cupon");
const cuponAplicado = document.getElementById("cupon-aplicado");

btnCupon.addEventListener("click", () => {
    aplicarCupon();
});

btnDeshacer.addEventListener("click", () => {
    deshacerCupon();
});

function aplicarCupon(){
    const codigo = cupon.value.trim();

    if (codigo === "123456") {
        console.log("Cupón válido");
        precioFinal = precioFinal * 0.90;

        document.querySelector(
            ".seccion-resumen-grid-total h2"
        ).textContent =
            `TOTAL $${precioFinal.toLocaleString("es-AR")}`;

        cuponAplicado.style.display = "flex";
        cuponAplicado.textContent = "Cupón aplicado correctamente";
        errorCupon.style.display = "none";
    }
    else {
        errorCupon.style.display = "flex";
        errorCupon.textContent = "Cupón inválido";
        cuponAplicado.style.display = "none";
    }
}

function deshacerCupon(){
    cuponAplicado.style.display = "none";
    errorCupon.style.display = "none";

    console.log(precioFinal);
    let numero = precioFinal;
    console.log(numero);
    if (numero === precioFinal) {

        if(aplicaBodega){

            precioFinal = (paquete.precio + 50000);            

            document.querySelector(".seccion-resumen-grid-total h2").textContent =
            `TOTAL: $${precioFinal.toLocaleString("es-AR")}`;
            return;
        }

        precioFinal = paquete.precio;

        document.querySelector(
            ".seccion-resumen-grid-total h2"
        ).textContent =
            `TOTAL $${precioFinal.toLocaleString("es-AR")}`;
        
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
