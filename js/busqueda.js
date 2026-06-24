import { Vuelo } from "./Vuelo.js";


const busqueda = JSON.parse(
    localStorage.getItem("busqueda")
);


function crearVuelos() {

    return [
        new Vuelo(
            "Aerolíneas Argentinas",
            busqueda.origen,
            busqueda.destino,
            busqueda.fechaIda,
            busqueda.fechaVuelta,
            false,
            busqueda.pasajero,
            busqueda.clase,
            856000,
        ),

        new Vuelo(
            "LATAM",
            busqueda.origen,
            busqueda.destino,
            busqueda.fechaIda,
            busqueda.fechaVuelta,
            true,
            busqueda.pasajero,
            busqueda.clase,
            800000,
        ),

        new Vuelo(
            "FlyBondi",
            busqueda.origen,
            busqueda.destino,
            busqueda.fechaIda,
            busqueda.fechaVuelta,
            false,
            busqueda.pasajero,
            busqueda.clase,
            900000,
        )
    ];
}


const vuelos = crearVuelos();


function mostrarVuelos(lista) {

    const contenedor =
        document.getElementById("contenedor-vuelos");


    contenedor.innerHTML = "";


    lista.forEach((vuelo, index) => {


        contenedor.innerHTML += `

        <article class="tarjeta-vuelo">

            <div class="info-vuelo">

                <h3>${vuelo.aerolinea}</h3>

                <p>${vuelo.origen} → ${vuelo.destino}</p>

                <p>Ida: ${vuelo.fechaIda}</p>

                <p>Vuelta: ${vuelo.fechaVuelta}</p>

                <p>Pasajeros: ${vuelo.pasajero}</p>

                <p>Clase: ${vuelo.clase}</p>

            </div>


            <div class="precio">

                <p>
                $${vuelo.precio.toLocaleString("es-AR")}
                </p>

            </div>


            <input
                type="radio"
                name="vueloSeleccionado"
                class="seleccionar"
                id="vuelo${index}"
                value="${index}"
            >


            <label 
                for="vuelo${index}" 
                class="boton">

                Seleccionar

            </label>


        </article>

        `;
    });

}




function aplicarFiltros() {


    const precioMax =
        Number(document.getElementById("precio").value);



    const directo =
        document.getElementById("directo").checked;



    const conEscalas =
        document.getElementById("escala").checked;



    const aerolineas = [];



    if(document.getElementById("a1").checked){

        aerolineas.push("Aerolíneas Argentinas");

    }


    if(document.getElementById("a2").checked){

        aerolineas.push("LATAM");

    }


    if(document.getElementById("a3").checked){

        aerolineas.push("FlyBondi");

    }



    const resultado = vuelos.filter(vuelo => {


        const cumplePrecio =
            vuelo.precio <= precioMax;



        let cumpleEscalas = true;



        if(directo && !conEscalas){

            cumpleEscalas = !vuelo.escalas;

        }


        else if(conEscalas && !directo){

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



    const sliderPrecio =
        document.getElementById("precio");



    const labelPrecio =
        document.getElementById("label-precio");





    sliderPrecio.addEventListener("input", () => {


        labelPrecio.textContent =
        `Hasta $${Number(sliderPrecio.value)
        .toLocaleString("es-AR")}`;



        aplicarFiltros();

    });


    document
        .querySelectorAll(".filtros input")
        .forEach(input => {


            input.addEventListener(
                "change",
                aplicarFiltros
            );


        });






    const formulario =
        document.querySelector("form");



    formulario.addEventListener("submit", (e) => {



        const seleccionado =
            document.querySelector(
            'input[name="vueloSeleccionado"]:checked'
            );



        if(!seleccionado){


            e.preventDefault();

            alert("Seleccione un vuelo");

            return;

        }




        const vueloElegido =
            vuelos[seleccionado.value];



        localStorage.setItem(
            "vueloSeleccionado",
            JSON.stringify(vueloElegido)
        );


    });



});