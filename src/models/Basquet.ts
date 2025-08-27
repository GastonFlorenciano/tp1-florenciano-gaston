import { Equipo } from "./Equipo.js";
import { Deporte } from "./Deporte.js";

export class Basquet extends Deporte {
    constructor() {
        super("Básquet", 5);
    }

    validar(equipo: Equipo): boolean {
        if (equipo.cantidad > this.maxPorEquipo) {
            console.log(`El equipo ${equipo.nombre} excede el máximo de jugadores permitidos (${this.maxPorEquipo}) para el deporte ${this.nombre}.`);
            return false;
        } else {
            console.log('Validación exitosa para el equipo ' + equipo.nombre);
        }
        return true;
    }
}
