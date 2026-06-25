const vuelos = JSON.parse(sessionStorage.getItem("reservas")) || [];

const paquetes = JSON.parse(sessionStorage.getItem("reservasPaquetes")) || [];

console.log(vuelos);

console.log(paquetes);

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-vuelos");

    vuelos.forEach(vuelo => {
        contenedor.innerHTML += `
            <div class="acordion">
                <details>
                    <summary class="acordion-header">
                        <span>${vuelo.origen} - ${vuelo.destino}</span>
                        <span class="total">TOTAL ${vuelo.precio}</span>
                    </summary>

                    <div class="acordion-body">

                        <div class="columna-izquierda">
                            <p><strong>${vuelo.aerolinea}</strong></p>
                            <p>${vuelo.fechaIda}</p>
                            <p>${vuelo.fechaVuelta}</p>
                            <p class="informacion-extra">
                                Clase: ${vuelo.clase}
                            </p>
                            <p class="informacion-extra">
                                Cod. Vuelo: FBK6778
                            </p>
                        </div>

                        <div class="columna-derecha">
                            <p><strong>${vuelo.pasajero} Pasajero</strong></p>
                            <p>Impuestos Incluidos</p>
                        </div>

                    </div>
                </details>
            </div>
        `;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const contenedorPaquetes = document.getElementById("contenedor-paquetes");

    paquetes.forEach(paquete => {
        contenedorPaquetes.innerHTML += `
            <div class="acordion">
                <details>
                    <summary class="acordion-header">
                        <span>Buenos Aires - ${paquete.destino}</span>
                        <span class="total">TOTAL ${paquete.precio}</span>
                    </summary>

                    <div class="acordion-body">

                        <div class="columna-izquierda">
                            <p><strong>${paquete.aerolinea}</strong></p>
                            <p>${paquete.dias} Dias</p>
                            <p>${paquete.noches} Noches</p>
                            <p class="informacion-extra">
                                Clase: ${paquete.hotel}
                            </p>
                            <p class="informacion-extra">
                                Cod. Vuelo: FBK6778
                            </p>
                        </div>

                        <div class="columna-derecha">
                            <p><strong>${paquete.pasajero} Pasajero</strong></p>
                            <p>Impuestos Incluidos</p>
                        </div>

                    </div>
                </details>
            </div>
        `;
    });
});