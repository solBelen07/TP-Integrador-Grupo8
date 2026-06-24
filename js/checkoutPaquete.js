import { InicioRegistro } from "./InicioRegistro.js";


const paquete = JSON.parse(localStorage.getItem("paqueteSeleccionado"));

const reservasPaquetes = JSON.parse(sessionStorage.getItem("reservasPaquetes")) || [];

const precioOriginal = paquete.precio;
let precioFinal = precioOriginal;
const equipajeBodega = JSON.parse(localStorage.getItem("equipajeBodega"));

console.log(equipajeBodega);

const contenedor = document.getElementById("seccion-resumen");


contenedor.innerHTML = `
    <div class="div-resumen">
        <h2>RESUMEN</h2>
        <h3>${paquete.aerolinea}</h3>
        <h3>Buenos Aires - ${paquete.destino}</h3>
    </div>
    <div class="seccion-resumen-grid-resumen-viaje">
    <p>Dias: ${paquete.dias}</p>
    <p>Noches: ${paquete.noches}</p>
    <p>Cantidad de Pasajeros: ${paquete.pasajero}</p>
    <p>Hotel: ${paquete.hotel}</p>
    <p>Cod. Vuelo: FBK6778</p>
    </div>
    <div class="seccion-resumen-grid-descuento">
        <input placeholder="Ingrese Cupon" id="cupon" type="text"><br>
        <button type="button" class="boton-aplicar">Aplicar</button>
        <button type="button" class="boton-deshacer">Deshacer</button>
        <p id="error-cupon"></p>
        <p id="cupon-aplicado"></p>
    </div>
    <div class="seccion-resumen-grid-total">
        <h2>TOTAL: $${precioFinal.toLocaleString("es-AR")}</h2>
    </div>
    <p id="seccion-datos-personales-error"></p>
`;



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

    document.querySelector(".seccion-resumen-grid-total h2").textContent =
        `TOTAL: $${precioFinal.toLocaleString("es-AR")}`;

}

const errorCheckout = document.getElementById("seccion-datos-personales-error");

const nombre = document.getElementById("nombre");
const documentoPasajero = document.getElementById("documento-pasajero");
const emailPasajero = document.getElementById("email-pasajero");
const telefono = document.getElementById("telefono");

const opcionTarjeta = document.getElementById("opcion-tarjeta");
const opcionTransferencia = document.getElementById("opcion-transferencia");
const opcionPaypal = document.getElementById("opcion-paypal");

const tarjeta = document.getElementById("tarjeta");
const nombreTarjeta = document.getElementById("nombre-tarjeta");
const mes = document.getElementById("mes");
const anio = document.getElementById("anio");
const codigoSeguridad = document.getElementById("codigo-seguridad");
const documentoTitular = document.getElementById("documento-titular");

const documentoTransferencia = document.getElementById("documento-transferencia");
const emailTransferencia = document.getElementById("email-transferencia");


function validarCheckout() {

    if (nombre.value.trim() === "") {
        return false;
    }

    if (!documentoPasajero.validity.valid) {
        return false;
    }

    if (!emailPasajero.validity.valid) {
        return false;
    }

    if (telefono.value.trim() === "") {
        return false;
    }

    if (
        !opcionTarjeta.checked &&
        !opcionTransferencia.checked &&
        !opcionPaypal.checked
    ) {
        return false;
    }

    if (opcionTarjeta.checked) {

        if (!tarjeta.validity.valid) {
            return false;
        }

        if (nombreTarjeta.value.trim() === "") {
            return false;
        }

        if (!mes.validity.valid) {
            return false;
        }

        if (!anio.validity.valid) {
            return false;
        }

        if (!codigoSeguridad.validity.valid) {
            return false;
        }

        if (!documentoTitular.validity.valid) {
            return false;
        }
    }

    if (opcionTransferencia.checked) {

        if (emailTransferencia.value.trim() === "") {
            return false;
        }

        if (documentoTransferencia.value.trim() === "") {
            return false;
        }
    }

    return true;
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

        document.querySelector(".seccion-resumen-grid-total h2").textContent = `TOTAL $${precioFinal.toLocaleString("es-AR")}`;

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

const formulario = document.getElementById("form-checkout-paquete");
const popupFin = document.getElementById("popup-fin-compra");
const popupLogin = document.getElementById("popup-login");

console.log(paquete);

formulario.addEventListener("submit", (e) => {  

    e.preventDefault(); 

    if (!validarCheckout()) {
        errorCheckout.textContent = "Complete todos los datos para continuar.";
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

    console.log(reservasPaquetes);
    popupFin.style.display = "flex";
});
