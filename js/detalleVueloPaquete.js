const paquete = JSON.parse(
    localStorage.getItem("paqueteSeleccionado")
);

console.log(paquete);

const equipajeBodega = JSON.parse(localStorage.getItem("equipajeBodega"));

if (paquete) {

    document.getElementById("div-resumen-destino").textContent = paquete.destino;  
    
    document.getElementById("div-resumen-dias").textContent = `Dias: ${paquete.dias}`; 

    document.getElementById("div-resumen-noches").textContent = `Dias: ${paquete.noches}`; 

    document.getElementById("div-resumen-hotel").textContent = `Hotel: ${paquete.hotel}`; 

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


const formulario = document.getElementById("form-detalle-vuelo");

const cantidadPasajeros = Number(paquete.pasajero);
const asientos = document.querySelectorAll('input[name=asiento]');
const errorAsiento = document.getElementById("error-cantidad-asiento");

asientos.forEach(asiento => {

    asiento.addEventListener("change", () => {
        const asientoSeleccionado = document.querySelectorAll('input[name=asiento]:checked');
        if(asientoSeleccionado.length > cantidadPasajeros){
            asiento.checked = false;
            errorAsiento.textContent = "Ya seleccionó la cantidad de asientos totales."
        }

    })

});

function cantidadCorrectaAsientos(){

    let cantidadAsientos = 0;

    asientos.forEach(asiento => {

        if(asiento.checked){
            cantidadAsientos ++;
        }

    });

    return cantidadAsientos === cantidadPasajeros;
}

formulario.addEventListener("submit", (e) => {

    if (!cantidadCorrectaAsientos()) {
        e.preventDefault();
        errorAsiento.textContent = "Falta seleccionar asiento/s."
    }   
    
});