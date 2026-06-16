import { paquetes } from "./paquetes.js";

const cards = document.querySelectorAll(".card-link");

cards.forEach(card => {

    card.addEventListener("click", () => {

        const id = Number(card.dataset.id);

        const paquete = paquetes.find(
            paquete => paquete.id === id
        );

        localStorage.setItem(
            "paqueteSeleccionado",
            JSON.stringify(paquete)
        );
    });

});