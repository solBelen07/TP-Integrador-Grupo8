const formulario =document.getElementById("form-contacto");

const mensaje =document.querySelector(".mensaje-contacto");

const popup = document.getElementById("popup-contacto");

const cerrarPopup = document.getElementById("cerrar-popup");


popup.style.display = "none";


formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    const nombre =
        document.getElementById("nombre");

    const apellido =
        document.getElementById("apellido");

    const email =
        document.getElementById("email");

    const telefono =
        document.getElementById("telefono");

    const mensajeTexto =
        document.getElementById("mensaje");


    mensaje.textContent = "";

    if (nombre.value.trim() === "") {
        mensaje.textContent = "Ingrese un nombre";
        return;
    }

    if (apellido.value.trim() === "") {
        mensaje.textContent = "Ingrese un apellido";
        return;
    }

    if (email.value.trim() === "") {
        mensaje.textContent = "Ingrese un email";
        return;
    }

    if (telefono.value.trim() === "") {
        mensaje.textContent = "Ingrese un teléfono";
        return;
    }

    if (mensajeTexto.value.trim() === "") {
        mensaje.textContent = "Ingrese un mensaje";
        return;
    }


    popup.style.display = "flex";

    formulario.reset();
});


cerrarPopup.addEventListener("click", () => {
    popup.style.display = "none";
});