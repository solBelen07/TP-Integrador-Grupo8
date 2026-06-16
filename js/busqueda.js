const vuelos = [
    {
        aerolinea: "Aerolíneas Argentinas",
        ruta: "Buenos Aires  →  Cordoba",
        salida: "08:30",
        llegada: "1h 25m",
        duracion: "1h 40m",
        precio: 856000,
        escalas: true
    },
     {
        aerolinea: "Aerolíneas Argentinas",
        ruta: "Buenos Aires  →  Cordoba",
        salida: "08:30",
        llegada: "9h 50m",
        duracion: "1h 20m",
        precio: 906000,
        escalas: false
    },
    {
        aerolinea: "LATAM",
        ruta: "Buenos Aires → Córdoba",
        salida: "09:30",
        llegada: "11:10",
        duracion: "1h 40m",
        precio: 800000,
        escalas: true
    },
    {
        aerolinea: "FlyBondi",
        ruta: "Buenos Aires → Córdoba",
        salida: "08:00",
        llegada: "09:15",
        duracion: "1h 15m",
        precio: 950000,
        escalas: false
    }
];
function mostrarVuelos(lista) {

    const contenedor = document.getElementById("contenedor-vuelos");

    contenedor.innerHTML = "";

    lista.forEach(vuelo => {

        contenedor.innerHTML += `
            <article class="tarjeta-vuelo">

                <div class="info-vuelo">
                    <h3>${vuelo.aerolinea}</h3>
                    <p>${vuelo.ruta}</p>

                    <p>Salida: ${vuelo.salida} hs
                       Llegada: ${vuelo.llegada} hs</p>
                    <p>Duración: ${vuelo.duracion}</p>
                </div>

                <div class="precio">
                    <p>$${vuelo.precio.toLocaleString()}</p>

                    <button class="boton">
                        Seleccionar
                    </button>
                </div>

            </article>
        `;
    });
}
function aplicarFiltros() {

    const precioMax =
        Number(document.getElementById("precio").value) * 1000;

    const directo =
        document.getElementById("directo").checked;

    const conEscalas =
        document.getElementById("escala").checked;

    const aerolineas = [];

    if (document.getElementById("a1").checked)
        aerolineas.push("Aerolíneas Argentinas");

    if (document.getElementById("a2").checked)
        aerolineas.push("LATAM");

    if (document.getElementById("a3").checked)
        aerolineas.push("FlyBondi");

   const resultado = vuelos.filter(vuelo => {

    const cumplePrecio =
        vuelo.precio <= precioMax;

    let cumpleEscalas = true;

    if (directo && !conEscalas) {
        cumpleEscalas = !vuelo.escalas;
    }
    else if (conEscalas && !directo) {
        cumpleEscalas = vuelo.escalas;
    }

    const cumpleAerolinea =
        aerolineas.length === 0 ||
        aerolineas.includes(vuelo.aerolinea);

    return (
        cumplePrecio &&
        cumpleEscalas &&
        cumpleAerolinea
    );
});

    mostrarVuelos(resultado);
}
document.addEventListener("DOMContentLoaded", () => {

    mostrarVuelos(vuelos);

    document
        .querySelectorAll(".filtros input")
        .forEach(input => {
            input.addEventListener(
                "change",
                aplicarFiltros
            );
        });

});