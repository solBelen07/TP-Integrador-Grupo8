const paquete = JSON.parse(
    localStorage.getItem("paqueteSeleccionado")
);

const reservasPaquetes = JSON.parse(sessionStorage.getItem("reservasPaquetes")) || [];

const precioOriginal = paquete.precio;
let precioFinal = precioOriginal;
const equipajeBodega = JSON.parse(localStorage.getItem("equipajeBodega"));

function aplicaBodega(){

    if (equipajeBodega) {

        return true;
    }

}

function obtenerPrecioBase() {

    let precioBase = precioOriginal;

    if (equipajeBodega) {
        precioBase += 50000;
    }

    return precioBase;
}

if(aplicaBodega()){

    precioFinal = obtenerPrecioBase() ;

    document.getElementById("seccion-resumen-grid-total").textContent =
        `TOTAL: $${precioFinal.toLocaleString("es-AR")}`;

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

        precioFinal = obtenerPrecioBase() * 0.90;

        paquete.precio = precioFinal;

        document.querySelector(
            ".seccion-resumen-grid-total h2"
        ).textContent =
            `TOTAL $${precioFinal.toLocaleString("es-AR")}`;

        cuponAplicado.style.display = "flex";
        cuponAplicado.textContent = "Cupón aplicado correctamente";
        errorCupon.style.display = "none";
        console.log(paquete);
    }

    else {
        errorCupon.style.display = "flex";
        errorCupon.textContent = "Cupón inválido";
        cuponAplicado.style.display = "none";
    }
}

function deshacerCupon(){
    
    precioFinal = obtenerPrecioBase();

    paquete.precio = precioFinal;

    cuponAplicado.style.display = "none";
    errorCupon.style.display = "none";

    document.querySelector(
        ".seccion-resumen-grid-total h2"
    ).textContent =
        `TOTAL: $${precioFinal.toLocaleString("es-AR")}`;
        
}

opcionTarjeta.addEventListener("change", actualizarRequired);
opcionTransferencia.addEventListener("change", actualizarRequired);


const formulario = document.getElementById("form-checkout-paquete");
const popupFin = document.getElementById("popup-fin-compra");
const popupLogin = document.getElementById("popup-login");

console.log(paquete);

formulario.addEventListener("submit", (e) => {  
    if (!formulario.checkValidity()) {
        return;
    }

    const usuarioLogueado = InicioRegistro.usuarioLogueado();

    console.log(usuarioLogueado);

    if(!usuarioLogueado){
        popupLogin.style.display = "flex";
        e.preventDefault();
        return;
    }

    paquete.precio = precioFinal;

    reservasPaquetes.push(paquete);

    sessionStorage.setItem(
        "reservasPaquetes",
        JSON.stringify(reservasPaquetes)
    );

    e.preventDefault();
    popupFin.style.display = "flex";
});
