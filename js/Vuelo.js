export class Vuelo {
    constructor(areolinea, origen, destino, fechaIda, fechaVuelta, escalas, pasajero, clase, precio) {
        this.aerolinea = areolinea;
        this.origen = origen;
        this.destino = destino;
        this.fechaIda = fechaIda;
        this.fechaVuelta = fechaVuelta;
        this.escalas = escalas;
        this.pasajero = pasajero;
        this.clase = clase;
        this.precio = precio;
    }
}