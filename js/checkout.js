console.log("checkout cargado");

const vuelo = {
    ruta: "Buenos Aires - Córdoba",
    fecha: "24/05/2026",
    horario: "08:00 - 20:40",
    codigo: "FBK6778",
    precio: 1115000
};

const form = document.querySelector("form");

const nombre = document.getElementById("nombre");
const documento = document.getElementById("documento-pasajero");
const email = document.getElementById("email-pasajero");
const telefono = document.getElementById("telefono");

const metodoPago = document.getElementsByName("metodo-pago");

const totalTexto = document.querySelector(".seccion-resumen-grid-total h2");

const cupon = document.getElementById("cupon");
const btnCupon = document.querySelector(".boton-aplicar");

// total precio (puede cambiar con cupón) - Variable q puede cambiar y sirve para aplicar descuentos 
let totalFinal = vuelo.precio;
 // Actualiza el html hy muestra el total x pantalla.
function mostrarTotal() {
    totalTexto.innerText = `TOTAL $${totalFinal.toLocaleString()}`;
}

mostrarTotal();

// VALIDACIÓN + COMPRA
// Valida campos, crea la reserva y guarda datos.
form.addEventListener("submit", (e) => {
    e.preventDefault();
//Evita q se manden campos vacios.
    if (
        nombre.value === "" ||
        documento.value === "" ||
        email.value === "" ||
        telefono.value === ""
    ) {
        alert("Completa todos los campos del pasajero");
        return;
    }

    const pagoSeleccionado = Array.from(metodoPago).find(p => p.checked);

    if (!pagoSeleccionado) {
        alert("Selecciona un método de pago");
        return;
    }

    // reserva 
    const reserva = {
        nombre: nombre.value,
        documento: documento.value,
        email: email.value,
        ruta: vuelo.ruta,
        fecha: vuelo.fecha,
        horario: vuelo.horario,
        codigo: vuelo.codigo,
        precio: vuelo.precio
    };

    // GUARDAR EN LOCALSTORAGE (conecta con Mis Vuelos)
    let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

    reservas.push(reserva);

    localStorage.setItem("reservas", JSON.stringify(reservas));

    alert("Compra realizada con éxito 🎉");

    // REDIRECCIÓN
    window.location.href = "./perfil-mis-vuelos.html";
});

// CUPÓN DE DESCUENTO

btnCupon.addEventListener("click", () => {
    const codigo = cupon.value.trim().toUpperCase();

    if (codigo === "DESCUENTO10") {
        totalFinal = vuelo.precio * 0.9;
        mostrarTotal();
        alert("Cupón aplicado ✔");
    } else {
        alert("Cupón inválido ❌");
    }
});