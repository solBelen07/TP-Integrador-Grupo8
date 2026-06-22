const vuelos =
    JSON.parse(sessionStorage.getItem("reservas")) || [];

console.log(vuelos);

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-vuelos");

    vuelos.forEach(vuelo => {
        contenedor.innerHTML += `n  
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