import type { ICompetidor } from "../interfaces/ICompetidor.js";
import { Jugador } from "./Jugador.js";

export class Equipo implements ICompetidor {
    private jugadores: Jugador[] = [];

    constructor(public nombre: string) {}

    agregarJugador(jugador: Jugador) {
        this.jugadores.push(jugador);
    }

    listarIntegrantes(): string[] {
        return this.jugadores.map(j => j.toString());
    }

    toString(): string {
        return `Equipo: ${this.nombre}, Jugadores: [${this.listarIntegrantes().join(", ")}]`;
    }

    get cantidad(): number {
        return this.jugadores.length;
    }
}