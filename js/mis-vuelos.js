const vuelos = [
    {
        ruta: "Buenos Aires - Córdoba",
        precio: "$1.115.000",
        aerolinea: "Aerolíneas Argentinas",
        fecha: "24/05/2026",
        horario: "08:00 - 20:40",
        duracion: "20hs 40m",
        codigo: "FBK6778",
        pasajeros: 1
    },
    {
        ruta: "Buenos Aires - Bariloche",
        precio: "$980.000",
        aerolinea: "LATAM",
        fecha: "12/06/2026",
        horario: "06:30 - 09:45",
        duracion: "3hs 15m",
        codigo: "LA3021",
        pasajeros: 1
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-vuelos");

    vuelos.forEach(vuelo => {
        contenedor.innerHTML += `
            <div class="acordion">
                <details>
                    <summary class="acordion-header">
                        <span>${vuelo.ruta}</span>
                        <span class="total">TOTAL ${vuelo.precio}</span>
                    </summary>

                    <div class="acordion-body">

                        <div class="columna-izquierda">
                            <p><strong>${vuelo.aerolinea}</strong></p>
                            <p>${vuelo.fecha}</p>
                            <p>${vuelo.horario}</p>
                            <p class="informacion-extra">
                                Duración: ${vuelo.duracion}
                            </p>
                            <p class="informacion-extra">
                                Cod. Vuelo: ${vuelo.codigo}
                            </p>
                        </div>

                        <div class="columna-derecha">
                            <p><strong>${vuelo.pasajeros} Pasajero</strong></p>
                            <p>Impuestos Incluidos</p>
                        </div>

                    </div>
                </details>
            </div>
        `;
    });
});